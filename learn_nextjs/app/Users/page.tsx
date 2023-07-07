import getAllUsers from "@/lib/getAllUsers";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
    title: "Users",
    description: "Users Collection",
};
export default async function User() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;
    return (
        <>
            <section className="flex justify-center items-center h-screen ">
                <ul>
                    {users.map((el) => {
                        return (
                            <li key={el.id} className="my-7 text-3xl">
                                <Link href={`/Users/${el.id}`}>
                                    {el.id} . {el.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

