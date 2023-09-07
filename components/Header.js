import { useEffect, useState } from 'react';

const Header = () => {
    const phrases = [
        "Welcom To eDental Clincs",
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
        <div className="relative h-screen start-page">
            <div>
            <video autoPlay loop muted className="absolute inset-0 object-cover object-center w-full background-video">
                    <source src="dental_clinic5.mp4" type="video/mp4" />
                </video>
              
            </div>

            {/* <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className=" bg-slate-200 bg-opacity-5 max-w-90 max-h-36 p-9"  >
                    <h1 className="text-4xl animate-pulse fadeInRight animate-slow">
                        {phrases[currentIndex]}
                    </h1>
                </div>

            </div> */}

        </div>

    );
};

export default Header;