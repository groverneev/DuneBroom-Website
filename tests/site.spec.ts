import { test, expect } from '@playwright/test';

const routes = ['/', '/outreach', '/system-logic', '/technical-architecture', '/about_me', '/contact'];

for (const route of routes) {
  test(`${route} renders accessible content and fits the viewport`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator('main#main-content')).toBeVisible();
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://dunebroom.com${route}`);
    if (route === '/') {
      await expect(page.locator('main')).toContainText('approximately 8 million metric tons');
      await expect(page.locator('main')).toContainText('but only <1%');
    }
    const images = page.locator('main img');
    for (const image of await images.all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
  });
}

test('theme survives navigation and reload', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await page.getByRole('button', { name: 'Toggle dark/light theme' }).filter({ visible: true }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.goto('/system-logic');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).toHaveClass(/dark/);
});

test('navigation identifies the active page and mobile menu closes with Escape', async ({ page }, testInfo) => {
  await page.goto('/outreach');
  if (testInfo.project.name === 'mobile') {
    const button = page.locator('#menu-toggle');
    await button.click();
    await expect(page.locator('#mobile-menu')).toBeVisible();
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-menu')).toBeHidden();
    await button.click();
  }
  await expect(page.locator('nav a[aria-current="page"]').filter({ visible: true })).toHaveText('Outreach');
  await page.getByRole('navigation').getByRole('link', { name: 'Contact', exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL(/\/contact\/?$/);
});

test('contact preserves failed submissions and supports retry and another message', async ({ page }) => {
  let succeed = false;
  await page.route('https://formspree.io/f/xnnvbrzq', async route => {
    expect(route.request().postData()).toContain('name="_gotcha"');
    await route.fulfill({ status: succeed ? 200 : 422, contentType: 'application/json', body: succeed ? '{"ok":true}' : '{"errors":[]}' });
  });
  await page.goto('/contact');
  await page.getByLabel('Name', { exact: true }).fill('Website test');
  await page.getByLabel('Email', { exact: true }).fill('test@example.com');
  await page.getByLabel('Message', { exact: true }).fill('A mocked contact form test.');
  await page.getByRole('button', { name: 'Send Message', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Something went wrong');
  await expect(page.getByLabel('Message', { exact: true })).toHaveValue('A mocked contact form test.');
  succeed = true;
  await page.getByRole('button', { name: 'Send Message', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Message sent!');
  await expect(page.locator('#contact-form')).toBeHidden();
  await page.getByRole('button', { name: 'Send another message' }).click();
  await expect(page.getByLabel('Name', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Name', { exact: true })).toBeFocused();
});

test('original diagram images are restored', async ({ page }) => {
  await page.goto('/system-logic');
  await expect(page.locator('figure.diagram')).toHaveCount(2);
  await expect(page.locator('figure img')).toHaveCount(2);
  await expect(page.locator('figure img').first()).toHaveAttribute('src', '/Figure_1_Operational_Workflow.png');
  await expect(page.locator('figure img').last()).toHaveAttribute('src', '/Figure_3_Collection_Sequence.png');
  await expect(page.locator('figure')).toContainText(['Autonomous operational workflow', 'Debris collection sequence']);
  await page.goto('/technical-architecture');
  await expect(page.locator('figure img')).toHaveAttribute('src', '/Figure_2_Hardware_Architecture.png');
});

test('content, diagrams, links and form fallback work without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/system-logic');
  await expect(page.locator('h1')).toHaveText('System Logic');
  await expect(page.locator('figure')).toContainText(['Autonomous operational workflow', 'Debris collection sequence']);
  await page.goto('http://127.0.0.1:4321/contact');
  await expect(page.locator('form')).toHaveAttribute('action', 'https://formspree.io/f/xnnvbrzq');
  await expect(page.locator('form')).toHaveAttribute('method', 'post');
  await context.close();
});

test('404 and sitemap are present', async ({ page, request }) => {
  const response = await page.goto('/this-page-does-not-exist');
  expect(response?.status()).toBe(404);
  await expect(page.locator('main')).toContainText('This page could not be found');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  const sitemap = await request.get('/sitemap-0.xml');
  const xml = await sitemap.text();
  for (const route of routes) expect(xml).toContain(`https://dunebroom.com${route}`);
  expect(xml).not.toContain('404');
});
