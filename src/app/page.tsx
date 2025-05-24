import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-8 sm:px-20 py-20 gap-10 font-sans">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">
        Next.js 15 Caching Examples
      </h1>
      <div>
        <Link
          target="_blank"
          href="https://www.owolf.com/blog/caching-in-nextjs-15-a-developers-guide"
        >
          See the tutorial here.
        </Link>
      </div>
      <p className="text-center max-w-xl text-muted-foreground">
        Learn how caching works in Next.js 15 using real code examples. Click a
        link to explore.
      </p>
      <ul className="w-full max-w-xl space-y-4 text-left">
        <li>
          <Link
            href="/static-example"
            className="block p-4 rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <strong>Static Page</strong> — Rendered at build time, cached
            indefinitely.
            <br />
            <code>dynamic = `force-static`</code>
          </Link>
        </li>
        <li>
          <Link
            href="/revalidated-example"
            className="block p-4 rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <strong>Revalidated Page</strong> — Cached and re-rendered every 10
            seconds.
            <br />
            <code>revalidate = 10</code>
          </Link>
        </li>
        <li>
          <Link
            href="/dynamic-example"
            className="block p-4 rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <strong>Dynamic Page</strong> — No caching; freshly rendered every
            time.
            <br />
            <code>dynamic = `force-dynamic`</code>
          </Link>
        </li>
        <li>
          <Link
            href="/api-example"
            className="block p-4 rounded border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <strong>API Data with `fetch`</strong> — Cached API response,
            revalidated after 15 seconds.
            <br />
            <code>
              fetch(..., &#123; next: &#123; revalidate: 15 &#125; &#125;)
            </code>
          </Link>
        </li>
      </ul>
      <footer className="mt-16 text-sm text-center text-muted-foreground">
        Made with ❤️ to help you learn caching in Next.js 15
      </footer>
    </main>
  );
}
