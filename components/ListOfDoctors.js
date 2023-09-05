import Image from 'next/image';
import { doctors } from '@/data';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {doctors && Array.isArray(doctors) && doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div
              key={doctor.id}
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
          ))
        ) : (
          <p>No doctors available</p>
        )}
      </div>
    </div>
  );
}
