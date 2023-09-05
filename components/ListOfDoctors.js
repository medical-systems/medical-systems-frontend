import { people } from '@/data';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="container p-4 mx-auto">
      <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-2 lg:grid-cols-4">
        {people && Array.isArray(people) && people.length > 0 ? (
          people.map((doctor, index) => (
            <div
              key={doctor.id}
              className="overflow-hidden text-white transition-transform transform shadow-inner doctor-card bg-sky-950 rounded-2xl hover:scale-105"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative w-full h-56">
                <img
                  src={doctor.avatar}
                  alt={`Dr. ${doctor.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="font-mono text-xl">{doctor.name}</h2>
                {hoveredCard === index && (
                  <p className="font-mono text-sm">{doctor.additionalInfo}</p>
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