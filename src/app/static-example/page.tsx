export const dynamic = "force-static";

export default function StaticPage() {
  const now = new Date().toISOString();
  return <div>This page was statically rendered at {now}</div>;
}
