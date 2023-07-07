export default async function getPostsAsUser(userId: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        { next: { revalidate: 60 } }
    );
    if (!response.ok) undefined;
    return response.json();
}
