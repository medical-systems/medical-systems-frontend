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
    <div className=" flex justify-center items-center bg-gray-100 ml-0 w-full">
      <Card className="  h-90 w-full flex-row shadow-lg ml-20">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={Dentalcard[currentIndex]?.avatar}
            alt="" height={500} width={500}
            className="h-100 w-full object-cover "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="gray" className="animate-pulse mb-8 font-normal ml-20 ">
            {Dentalcard[currentIndex]?.name}
          </Typography>
          <Typography color="gray" className=" mb-8 font-normal flex justify-center items-center">
            {Dentalcard[currentIndex]?.additionalInfo}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}