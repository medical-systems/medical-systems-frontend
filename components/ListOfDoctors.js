import Image from 'next/image';
import { doctors } from '@/data';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

SwiperCore.use([Navigation]);

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <div className="mt-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          navigation
          loop={true}
          onReachEnd={(swiper) => swiper.slideTo(0)}
          className="swiper-container"
        >
          {doctors && Array.isArray(doctors) && doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <SwiperSlide key={doctor.id} className="swiper-slide">
                <div
                  className="doctor-card bg-sky-950 text-white rounded-2xl overflow-hidden shadow-inner transition-transform transform hover:scale-105"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={doctor.avatar}
                      alt={`Dr. ${doctor.name}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-mono">{doctor.name}</h2>
                    {hoveredCard === index && (
                      <p className="text-sm font-mono">{doctor.additionalInfo}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No doctors available</p>
          )}
        </Swiper>
      </div>
    </div>
  );
}
