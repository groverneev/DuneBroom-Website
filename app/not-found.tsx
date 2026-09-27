export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[80vh] items-center justify-center bg-background text-center text-foreground"
    >
      <div className="flex items-center justify-center gap-4">
        <h1 className="m-0 text-xl font-bold">404</h1>
        <div className="h-16 w-px bg-border" />
        <p className="m-0 text-xl">This page could not be found</p>
      </div>
    </main>
  );
}
