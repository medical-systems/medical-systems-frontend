import Link from 'next/link';

const LeftNavbar = () => {
  return (
    <nav className="flex flex-col  items-center w-40 h-full bg-sky-950 mt-1/2 text-white pt-10">
      <Link href={'/LoginForm'}>
        <button className="btn mt-30 btn-spacing hover:bg-white hover:bg-opacity-20 transition-colors ">Home</button>
      </Link>
      <Link href={'/LoginForm'}>
        <button className="btn  mt-20 btn-spacing hover:bg-white hover:bg-opacity-20 transition-colors">Appointment</button>
      </Link>
      <Link href={'/LoginForm'}>
        <button className="btn  mt-20 btn-spacing hover:bg-white hover:bg-opacity-20 transition-colors">Booking</button>
      </Link>
    </nav>
  );
};

export default LeftNavbar;
<div>
 
</div>
