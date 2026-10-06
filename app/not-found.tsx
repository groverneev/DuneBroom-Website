import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[80vh] flex-col items-center justify-center gap-8 bg-background text-center text-foreground"
    >
      <div className="flex items-center justify-center gap-4">
        <h1 className="m-0 text-xl font-bold">404</h1>
        <div className="h-16 w-px bg-border" />
        <p className="m-0 text-xl">This page could not be found</p>
      </div>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </main>
  );
}
