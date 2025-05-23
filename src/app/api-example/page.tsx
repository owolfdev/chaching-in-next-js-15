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
