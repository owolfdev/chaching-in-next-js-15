export const revalidate = 10;

export default function RevalidatedPage() {
  const now = new Date().toISOString();
  return <div>This page was rendered at {now} and revalidates every 10s.</div>;
}
