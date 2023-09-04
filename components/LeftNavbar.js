import Link from 'next/link';

const LeftNavbar = () => {
    return (
        <nav className="flex flex-col items-center w-[200px]  bg-sky-950 text-white pt-10  ">
        <Link href={'/LoginForm'}>
            <button className="btn mt-30 btn-spacing hover:bg-white hover:bg-opacity-20 hover:w-40 hover:h-20 transition-colors">Home</button>
        </Link>
        <div className='flex-wrap'>
            {/* <Image src="/house-user.png" alt='' width={25} height={25} className=" w-30 " /> */}
            <Link href={'/LoginForm'}>
                <button className="btn mt-20 btn-spacing hover:bg-white hover:bg-opacity-20 hover:w-40 hover:h-20 transition-colors">Appointment</button>
            </Link>
        </div>
    
        <Link href={'/LoginForm'}>
            <button className="btn mt-20 btn-spacing hover:bg-white hover:bg-opacity-20 hover:w-40 hover:h-20 transition-colors">Booking</button>
        </Link>
    </nav>
    
    );
};

export default LeftNavbar;
<div>

</div>