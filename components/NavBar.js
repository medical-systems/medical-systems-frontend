

import Image from 'next/image';
import Link from 'next/link';


function NavBar() {
    return (
        <>

            <nav className="flex items-center justify-between p-0 bg-sky-950 text-white">

                <Image src="/edental_logo.png" alt='' width={100} height={100} className=" w-30 " />

                <button className="btn mr-2 ">
                    <Link href={'/LoginForm'}>
                        Login
                    </Link>
                </button>
            </nav>

        </>

    );
}

export default NavBar;















