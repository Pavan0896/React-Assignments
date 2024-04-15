export function add(a, b) {
  return a + b;
}

export async function fetchData() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data;
}
