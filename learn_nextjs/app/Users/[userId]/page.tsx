type props = {
    params: { userId: string };
};
import getPostsAsUser from "@/lib/getPostsAsUser";
import getSpecificUser from "@/lib/getSpecificUser";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { Fragment } from "react";
export default async function UserPage({ params: { userId } }: props) {
    const specificUser: Promise<User> = getSpecificUser(userId);
    const postAsUser: Promise<post[]> = getPostsAsUser(userId);
    const [user, posts] = await Promise.all([specificUser, postAsUser]);
    return (
        <>
            <section className="flex justify-center mt-9  flex-col items-center">
                <h1 className="text-orange-500 text-4xl ">{user.name}</h1>
                <h2 className="text-3xl">Post Count: {posts.length}</h2>
                <article className="w-[70%] m-auto">
                    {posts.map((el) => {
                        return (
                            <Fragment key={el.id}>
                                <h2 className="text-3xl text-center my-2">
                                    {el.title}
                                </h2>
                                <p className=" w-[60%] m-auto my-5">
                                    {el.body}
                                </p>
                            </Fragment>
                        );
                    })}
                </article>
            </section>
        </>
    );
}
export async function generateMetadata({ params: { userId } }: props) {
    const specificUser: Promise<User> = getSpecificUser(userId);
    const user = await specificUser;
    return {
        title: user.name,
        description: `page of ${user.name}`,
    };
}
export async function generateStaticParams() {
    const users: Promise<User[]> = getAllUsers();
    const allUsers = await users;
    return allUsers.map((el) => ({
        userId: el.id.toString(),
    }));
}
