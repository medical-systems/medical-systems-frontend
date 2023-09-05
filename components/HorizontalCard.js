import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { Dentalcard} from "@/data"

export default function HorizontalCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Dentalcard.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full ml-0 bg-gray-100 ">
      <Card className="flex-row w-full ml-20 shadow-lg  h-90">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 m-0 rounded-r-none shrink-0"
        >
          <img
            src={Dentalcard[currentIndex]?.avatar}
            alt="" height={500} width={500}
            className="object-cover w-full h-100 "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="gray" className="mb-8 ml-20 font-normal animate-pulse ">
            {Dentalcard[currentIndex]?.name}
          </Typography>
          <Typography color="gray" className="flex items-center justify-center mb-8 font-normal ">
            {Dentalcard[currentIndex]?.additionalInfo}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}