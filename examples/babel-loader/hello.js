export default async function hello() {
  const response = await fetch('http://httpbin.org/ip');
  return await response.json();
}
