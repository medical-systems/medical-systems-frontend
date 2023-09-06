import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/auth';
import useInfo from '@/hooks/useInfo';
const axios = require('axios');

export default function UpdateUserProfile() {
    const router = useRouter();
    const { user, token } = useAuth()
    const { info } = useInfo()

    let [userInfo, setUserInfo] = useState([]);

    // console.log(88888888888, userInfo)
    const baseURL = process.env.NEXT_PUBLIC_URL;
    let insurance = null;
    let gender = null;
    useEffect(() => {
        gerUserInfo();
        // console.log(666666666666,listOfGender);
        // console.log(77777777777777777,listOfInsurance);

    }, []);
    let listOfGender = info.genders;
    listOfGender.forEach(element => {
        if (userInfo.gender == element.id) {
            gender = element.gender;
        }
        // console.log(1111111, gender)

    });

    let listOfInsurance = info.insurances;
    console.log(1111111, listOfInsurance)
    listOfInsurance.forEach(element => {
        if (userInfo.insurance == element.id) {
            insurance = element.insurance_name;
        }

    });

    async function gerUserInfo() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token.access
            }
        }
        let url = `${baseURL}/accounts/${user.id}/`
        if (!token) {
            return null
        }
        try {
            const response = await axios.get(url, config);
            const responseData = response.data;
            setUserInfo(responseData);
        } catch (error) {
            console.log(error);
        }
    }

    async function updateUserInfo(event) {
        event.preventDefault();
        let config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token.access
            }
        }
        let updatedInfo = {
            "insurance": parseInt((event.target.insurance.value) ? event.target.insurance.value : userInfo.insurance),
            "last_name": (event.target.lastName.value) ? event.target.lastName.value : userInfo.last_name,
            "phone_num": (event.target.numberPhone.value) ? event.target.numberPhone.value : userInfo.phone_num,
            "first_name": (event.target.firstName.value) ? event.target.firstName.value : userInfo.first_name,
            "date_of_birth": (event.target.date.value) ? event.target.date.value : userInfo.date_of_birth,
            "email": (event.target.email.value) ? event.target.email.value : userInfo.email,
            "about_doctor":userInfo.about_doctor,
            "gender":userInfo.gender,
            "photo":userInfo.photo,
            "role":userInfo.role,
            "username":userInfo.username,
            "id":userInfo.id,
        }
        console.log("updatedinfo   ", updatedInfo)

        let url = `${baseURL}/accounts/${user.id}/`
        if (!token) {
            return null
        }
        try {
            axios.put(url, updatedInfo, config)
                .then(response => {
                    // Handle the successful response here
                    console.log('PUT request successful:', response.data);
                    // router.push("/assets/Appointment")
                })
                .catch(error => {
                    // Handle any errors that occurred during the PUT request
                    console.error('Error making PUT request:', error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="w-[1200px] mx-auto">
                <div className=" flex flex-col mx-auto mt-4 pb-12 w-[1000px] shadow-lg">
                    <h1 className="flex justify-center items-center text-2xl font-semibold mb-12 h-[60px] text-sky-900 shadow-lg ">Update User Profile</h1>
                    <form onSubmit={updateUserInfo}>
                        <div className="flex flex-wrap gap-y-16">
                            <div className="w-1/2 flex flex-col items-center ">
                                <label className="block text-sky-900 font-bold mb-2">First Name:</label>
                                <input name='firstName' placeholder={userInfo.first_name} className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Last Name:</label>
                                <input name='lastName' placeholder={userInfo.last_name} className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Email:</label>
                                <input name='email' type='email' placeholder={userInfo.email} className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Number Phone:</label>
                                <input name='numberPhone' placeholder={userInfo.phone_num} className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Date of Birth:</label>
                                <input name='date' type='date' placeholder={userInfo.date_of_birth} className="text-sky-900 text-center border border-sky-500 rounded" />
                            </div>
                            <div className="w-1/2 flex flex-col items-center">
                                <label className="block text-sky-900 font-bold mb-2">Insurance:</label>
                                <select name='insurance' className="text-sky-900 text-center border border-sky-500 rounded">
                                    {listOfInsurance.map((provider, index) => (
                                        <option key={index} value={provider.id}>
                                            {provider.insurance_name}
                                        </option>
                                    ))}
                                    {/* Add more insurance options as needed */}
                                </select>
                            </div>
                        </div>
                        <div className="flex h-[100px] items-center justify-center">
                            <button onClick={() => {
                                // router.push("/assets/UserProfile")
                            }} className="w-32 h-10 bg-sky-950 border border-blue-500 rounded-md text-white mt-20">
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}