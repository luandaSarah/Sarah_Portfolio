import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className=" bg-black bg-opacity-30 pt-20 rounded-3xl col-start-1 col-end-2 row-start-1 row-end-6 flex justify-center text-lg ">
            <div className='flex flex-col  gap-4 align-center'>
            <Link href={"./"} className='flex  gap-2 items-center text-whiteColor'><i className="fa-solid fa-house-chimney"></i> <p>Moi</p></Link>
            <Link href={"./projects"} className='flex  gap-2 items-center text-whiteColor '> <i className="fa-solid fa-folder"></i> <p>Projets</p></Link>
            <Link href={"./contact"}  className='flex  gap-2 items-center text-whiteColor'> <i className="fa-solid fa-envelope"></i> <p>Contact</p></Link>
            </div>
        </nav>
    );
}