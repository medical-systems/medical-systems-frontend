import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import CollapsibleReadMore from '@/components/CollapsibleReadMore';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Booking(props) {
    let people = props.people
    const [selected, setSelected] = useState(...people)
    // const [doctor , secDoctor] = useState({})

    const selectDoctorHandler = (event) => {
      console.log("event",event)
      setSelected(event)
      props.onDataReceived(selected)
    }
  
    return (
        <>
    <div className='flex flex-row-reverse items-center w-full'>
      <Listbox value={selected} onChange={selectDoctorHandler}>
        {({ open }) => (
          <>
          {selected && (
        
        <div className= "flex flex-col items-center w-full ">
          {/* <img
            src={selected.avatar}
            alt={`${selected.name}'s Avatar`}
            className="rounded-full "
          /> */}
          <h2 className="pt-3 text-lg font-semibold text-center"> Dr. Name: {selected.first_name} {selected.last_name}</h2>

          <h2><CollapsibleReadMore doctorInfo={selected.about_doctor} /></h2>
        </div>
      
      )}
          <div className="flex flex-col w-full ">
            <Listbox.Label className="mb-3 block text-base text-xl text-[#07074D]">Selecte a doctor</Listbox.Label>
            <div className="inset-0 flex items-center justify-start mt-2 ">
              <Listbox.Button className=" relative min-w-[320px] w-[320px]  border border-[#e0e0e0] bg-white py-1.5 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md rounded-md">
                <span className="flex items-center p-2 ">
                  {/* <img src={selected.avatar} alt="" className="flex-shrink-0 w-5 h-5 rounded-full" /> */}
                  <span className="block ml-3 truncate">{selected.first_name} {selected.last_name}</span>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                  <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 w-80 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                            {/* <img src={person.avatar} alt="" className="flex-shrink-0 w-5 h-5 rounded-full" /> */}
                            <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {person.first_name} {person.last_name}
                            </span>
                          
                          </div>
  
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4'
                              )}
                            >
                              <CheckIcon className="w-5 h-5" aria-hidden="true" />
          
                              
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