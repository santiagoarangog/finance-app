import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/users'>
                <a>Users</a>
            </Link>
            <Link href='/posts'>
                <a>Posts</a>
            </Link>
        </nav>
    )
}