import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className="pt-20 border-2 border-black col-start-1 col-end-2 row-start-1 row-end-5 flex flex-col text-lg gap-2 items-center">
            <Link href={"./me"}><i class="fa-solid fa-house-chimney"></i> <p>Moi</p></Link>
            <Link href={"./projects"}><p>Projets</p></Link>
            <Link href={"./contact"}><p>Contact</p></Link>
        </nav>
    );
}