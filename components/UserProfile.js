import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import { useAuth } from '@/contexts/auth';
import useInfo from '@/hooks/useInfo';
const axios = require('axios');

export default function UserProfile() {
    const router=useRouter();
    const { user,token } = useAuth()
    const { info } = useInfo()

    let [userInfo,setUserInfo]=useState([]);

    console.log(88888888888,info)
    const baseURL = process.env.NEXT_PUBLIC_URL;
    let insurance = null;
    let gender=null;
    useEffect(()=>{
        gerUserInfo();
        // console.log(666666666666,listOfGender);
        // console.log(77777777777777777,listOfInsurance);
        
    }, []);
    let listOfGender=info.genders;
    listOfGender.forEach(element => {
        if (userInfo.gender==element.id){
            gender=element.gender;
        }
        console.log(1111111,gender)
    
    });

    let listOfInsurance=info.insurances;
    listOfInsurance.forEach(element => {
        if (userInfo.insurance==element.id){
            insurance=element.insurance_name;
        }
        // console.log(1111111,insurance)
    
    });
    
    async function gerUserInfo(){
        let config={
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
    return (
        <>
            <div className="w-[1200px] h-screen mx-auto">
                <div className=" flex flex-col mx-auto mt-4 pb-12 w-[1000px] shadow-lg">
                    <h1 className="flex justify-center items-center text-2xl font-semibold mb-12 h-[60px] text-sky-900 shadow-lg ">My Profile</h1>
                    <div className="flex flex-wrap gap-y-16">
                        <div className="w-1/2 flex flex-col items-center ">
                            <label className="block text-sky-900 font-bold mb-2">First Name:</label>
                            <p className="text-sky-900">{userInfo.first_name}</p>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <label className="block text-sky-900 font-bold mb-2">Last Name:</label>
                            <p className="text-sky-900">{userInfo.last_name}</p>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <label className="block text-sky-900 font-bold mb-2">Email:</label>
                            <p className="text-sky-900">{userInfo.email}</p>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <label className="block text-sky-900 font-bold mb-2">Number Phone:</label>
                            <p className="text-sky-900">{userInfo.phone_num}</p>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <label className="block text-sky-900 font-bold mb-2">Date of Birth:</label>
                            <p className="text-sky-900">{userInfo.date_of_birth}</p>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <label className="block text-sky-900 font-bold mb-2">Insurance:</label>
                            <p className="text-sky-900">{insurance}</p>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <label className="block text-sky-900 font-bold mb-2">Gender:</label>
                            <p className="text-sky-900">{gender}</p>
        
                        </div>
                    </div>
                    <div className="flex h-[100px] items-center justify-center">
                        <button onClick={()=>{
                            router.push("/assets/UpdateUserProfile")
                        }} className="w-32 h-10 bg-sky-950 mb-6 border border-blue-500 rounded-md text-white">
                            UPDATE INFO
                        </button>
                    </div>
                </div>
            </div>
        </>
       
    )
}