export const dynamic = "force-dynamic";

export default function DynamicPage() {
  const now = new Date().toISOString();
  return <div>This page renders fresh every time: {now}</div>;
}
