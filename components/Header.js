import { useEffect, useState } from 'react';

const Header = () => {
    const phrases = [
        "Welcon To eDental Clincs",
        "Your Perfect Smile Starts Here",
        "Crafting healthy and beautiful smiles",
        "A Destination for Exceptional Dental Care",
        ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3500); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="start-page relative h-screen">
            <div>
                <video autoPlay loop muted className="background-video absolute inset-0 w-full h-3/5 object-cover object-center">
                    <source src="/backgroundVideo.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="text-center absolute inset-0 flex  items-center justify-center mb-40">
               <div className=" bg-slate-200 bg-opacity-5  max-w-90 max-h-90 p-9  "  >
               <h1 className="animate-pulse  fadeInRight animate-slow text-4xl">
                    {phrases[currentIndex]}
                </h1>
               </div>
               
            </div>

        </div>
    );
};

export default Header;
