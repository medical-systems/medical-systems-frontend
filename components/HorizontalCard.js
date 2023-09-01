import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://www.aspiredental.ca/wp-content/uploads/2023/03/how-do-your-gums-heal-after-a-tooth-extraction-scaled.jpg',
      additionalInfo: 'Dr. Wade Cooper is a specialist in orthopedics...',

  },
 
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      additionalInfo: 'Dr.Hellen Schmidt is a specialist in orthopedics...',

  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      additionalInfo: 'Dr.Caroline Schultz is a specialist in orthopedics...',

  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      additionalInfo: 'Dr.Mason Heaney is a specialist in orthopedics...',

  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      additionalInfo: 'Dr.Claudie Smitham is a specialist in orthopedics...',

  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      additionalInfo: 'Dr.Emil Schaefer is a specialist in orthopedics...',

  },
]

export default function HorizontalCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full flex justify-center items-center h-screen bg-gray-100">
      <Card className="animate-pulse w-full max-w-3xl flex-row shadow-lg">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={people[currentIndex]?.avatar}
            alt= ""height={500} width={500}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography color="gray" className="animate-pulse mb-8 font-normal">
            {people[currentIndex]?.additionalInfo}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
