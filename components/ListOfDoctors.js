const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function ListOfDoctors() {
  return (
<div className="bg-white py-6 sm:py-8  mx-4 mt-4 rounded-lg">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-6 px-4 lg:px-8 xl:grid-cols-3">
    <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2">
      {people.map((person) => (
        <div key={person.name} className="bg-gray-100 p-2 rounded-lg shadow-md">
          <img className="h-30 w-30 rounded-full mx-auto" src={person.imageUrl} alt="" />
          <div className="text-center mt-4">
            <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
              {person.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}
