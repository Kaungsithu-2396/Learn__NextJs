export default async function getAllUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) undefined;
    return response.json();
}
