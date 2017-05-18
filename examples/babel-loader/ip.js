// ip.js
// http://httpbin.org/ipから端末のIPアドレスを取得し返す関数
// ES2017のasync/await構文で非同期処理を記述
export default async function ip() {
  const resp = await fetch('http://httpbin.org/ip');
  const { origin } = await resp.json();
  return origin;
}
