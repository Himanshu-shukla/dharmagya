export async function getDemoToken() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
  try {
    const login = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "rahul@example.com", password: "password123" }),
      cache: "no-store",
    });
    if (login.ok) {
      const data = await login.json();
      return data.token as string;
    }
  } catch {
    return "";
  }
  return "";
}
