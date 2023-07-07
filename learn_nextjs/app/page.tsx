import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex justify-center flex-col items-center">
            <h2>Minglar par </h2>
            <Link href={"/Users"} className="text-orange-500 text-4xl">
                To User
            </Link>
        </main>
    );
}
