export async function getPost(id: string) {
  // For server-side rendering, construct the proper URL
  let baseUrl = '';

  if (typeof window === 'undefined') {
    // Server-side: use environment variables or default to localhost
    baseUrl =
      process.env.NEXTAUTH_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      'http://localhost:3000';
  } else {
    // Client-side: use relative URL
    baseUrl = '';
  }

  const url = `${baseUrl}/api/posts/${id}`;
  const response = await fetch(url, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  return response.json();
}
