import Image from 'next/image';


const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    additionalInfo: 'Dr. Wade Cooper is a specialist in orthopedics...',

  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    additionalInfo: 'Dr. Arlene Mccoy is a specialist in orthopedics...',

  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    additionalInfo: 'Dr. Devon Webb is a specialist in orthopedics...',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    additionalInfo: 'Dr. Tom Cook is a specialist in orthopedics...',

  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    additionalInfo: 'Dr.Tanya Fox is a specialist in orthopedics...',

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
];

export default function ListOfDoctors() {
  return (
    <div className="py-6 mx-4 mt-16 bg-white rounded-lg sm:py-8">
      <h2 className='my-12 text-2xl font-semibold leading-7 tracking-tight text-center text-sky-950'>Our Doctors</h2>
      <div className="flex flex-wrap justify-center px-4 mx-auto gap-x-8 gap-y-6 lg:px-8 xl:gap-x-12">
        {people.map((person) => (
          <div key={person.name} className="p-2 bg-gray-100 rounded-lg shadow-xl yellow-shadow">
            <img className="w-20 h-20 mx-auto rounded-full" src={person.avatar} alt="" />
            <div className="mt-4 text-center">
              <h3 className="w-40 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}