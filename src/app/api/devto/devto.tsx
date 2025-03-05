export async function fetchBlogs(username: string) {
  const API_URL = `https://dev.to/api/articles?username=${username}`;

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`[fetchBlogs] Error:`, error);
    throw new Error("Failed to fetch blog posts");
  }
}
