import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import CollapsibleReadMore from '@/components/CollapsibleReadMore';
import {people} from '@/data'

// const people = [
//     {
//       id: 1,
//       name: 'Wade Cooper',
//       avatar:
//         'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr. Wade Cooper is a specialist in orthopedics...',

//     },
//     {
//       id: 2,
//       name: 'Arlene Mccoy',
//       avatar:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr. Arlene Mccoy is a specialist in orthopedics...',

//     },
//     {
//       id: 3,
//       name: 'Devon Webb',
//       avatar:
//         'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
//         additionalInfo: 'Dr. Devon Webb is a specialist in orthopedics...',
//     },
//     {
//       id: 4,
//       name: 'Tom Cook',
//       avatar:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr. Tom Cook is a specialist in orthopedics...',

//     },
//     {
//       id: 5,
//       name: 'Tanya Fox',
//       avatar:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr.Tanya Fox is a specialist in orthopedics...',

//     },
//     {
//       id: 6,
//       name: 'Hellen Schmidt',
//       avatar:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr.Hellen Schmidt is a specialist in orthopedics...',

//     },
//     {
//       id: 7,
//       name: 'Caroline Schultz',
//       avatar:
//         'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr.Caroline Schultz is a specialist in orthopedics...',

//     },
//     {
//       id: 8,
//       name: 'Mason Heaney',
//       avatar:
//         'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr.Mason Heaney is a specialist in orthopedics...',

//     },
//     {
//       id: 9,
//       name: 'Claudie Smitham',
//       avatar:
//         'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr.Claudie Smitham is a specialist in orthopedics...',

//     },
//     {
//       id: 10,
//       name: 'Emil Schaefer',
//       avatar:
//         'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         additionalInfo: 'Dr.Emil Schaefer is a specialist in orthopedics...',

//     },
//   ]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Booking() {
    const [selected, setSelected] = useState(...people)
  
    return (
        <>
        <div className='flex justify-start items-start space-x-40 '>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
          {selected && (
        <div className= "ml-20 mt-10">
          <img
            src={selected.avatar}
            alt={`${selected.name}'s Avatar`}
            className="h-30 w-30 mt-2 rounded-full"
          />
          <h2 className="text-lg font-semibold"> Dr. Name: {selected.name}</h2>

          <CollapsibleReadMore doctorInfo={selected.additionalInfo} />
        </div>
      )}
          <div className="flex flex-col items-center justify-center mt-50  ">
            <Listbox.Label className="mb-3 block text-base font-medium text-[#07074D]">ٍSelecte a doctor</Listbox.Label>
            <div className=" inset-0 flex  items-center justify-center mt-2">
              <Listbox.Button className="relative w-60 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {person.name}
                            </span>
                          
                          </div>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
          
                              
                            </span>
                            
                          ) : null}
                          
                        </>
                        
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
            </div>
          </>
        )}
      </Listbox>
      
      </div>
      </>
    )
  }