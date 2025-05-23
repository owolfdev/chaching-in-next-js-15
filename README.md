## 🛠️ 1. Getting Started with a Fresh App

Install a new Next.js 15 project:

```bash
npx create-next-app@latest next15-cache-demo
cd next15-cache-demo
```

Make sure you select the **App Router** during setup.

---

## 🔎 2. Understand Caching Modes

Next.js 15 supports three main cache modes for server-rendered pages and data:

| Setting                     | Behavior            | Use Case                  |
| --------------------------- | ------------------- | ------------------------- |
| `dynamic = 'force-static'`  | Fully static        | Blog pages, landing pages |
| `revalidate = 60`           | ISR (cache for 60s) | News, product pages       |
| `dynamic = 'force-dynamic'` | No cache            | Dashboards, auth pages    |

---

## 🧪 3. Demo: Static Page with `dynamic = 'force-static'`

In `app/static-example/page.tsx`:

```tsx
export const dynamic = "force-static";

export default function StaticPage() {
  const now = new Date().toISOString();
  return <div>This page was rendered at {now}</div>;
}
```

Now visit `/static-example` — the page is built once and cached permanently until you redeploy.

---

## 🔄 4. Demo: Revalidated Page with `revalidate = 10`

In `app/revalidated-example/page.tsx`:

```tsx
export const revalidate = 10;

export default function RevalidatedPage() {
  const now = new Date().toISOString();
  return <div>This page was rendered at {now} and revalidates every 10s.</div>;
}
```

Visit `/revalidated-example` and refresh. You'll see the timestamp update every 10 seconds.

---

## 🚫 5. Demo: Fully Dynamic Page

In `app/dynamic-example/page.tsx`:

```tsx
export const dynamic = "force-dynamic";

export default function DynamicPage() {
  const now = new Date().toISOString();
  return <div>This page renders fresh every time: {now}</div>;
}
```

Visit `/dynamic-example` and see how it updates **every time** — no caching at all.

---

## 🌐 6. Demo: Caching API Data with `fetch`

In `app/api-example/page.tsx`:

```tsx
export default async function ApiExample() {
  const res = await fetch("https://worldtimeapi.org/api/ip", {
    next: { revalidate: 15 }, // cache this response for 15s
  });
  const data = await res.json();

  return (
    <div>
      <p>Current time: {data.datetime}</p>
      <p>Data is cached and refreshed every 15 seconds.</p>
    </div>
  );
}
```

You can swap `revalidate` with `cache: 'no-store'` for real-time data.

---

## ✅ 7. Best Practices

### 🔹 Use `revalidate` instead of `dynamic = 'force-dynamic'` whenever possible

This allows for **stale-while-revalidate**, which is faster and more scalable.

### 🔹 Cache external API responses explicitly

Always use `next: { revalidate }` or `cache: 'no-store'` with `fetch()` to control behavior.

### 🔹 Don’t over-cache dynamic data

Avoid caching user-specific data or authenticated content.

### 🔹 Group caching by layout if consistent

Example: a dashboard layout with `dynamic = 'force-dynamic'` ensures all child pages inherit that behavior.

---

## 📦 8. Standard Procedure for New Projects

When setting up caching:

1. Default pages: use static or ISR (`revalidate: 60`)
2. Dynamic dashboards: use `dynamic = 'force-dynamic'`
3. API responses: use `fetch(..., { next: { revalidate } })`
4. Authenticated routes: disable caching entirely

---

## 📘 Bonus: Manual Cache Revalidation

Set up an API route like `/api/revalidate`:

```ts
// app/api/revalidate/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { path } = await request.json();
  await fetch(`https://your-site.com${path}`, {
    method: "PURGE", // Simulated
  });

  return NextResponse.json({ revalidated: true });
}
```

This simulates an external CMS calling to clear cache.

---

Let me know if you want this tutorial exported to MDX, turned into a GitHub repo, or want help testing it live.
