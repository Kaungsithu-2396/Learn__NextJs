import Link from "next/link";
export default function Nav() {
    return (
        <nav>
            <ul className="flex justify-around text-4xl bg-white text-black p-5">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/Users"}>Users</Link>
                </li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
