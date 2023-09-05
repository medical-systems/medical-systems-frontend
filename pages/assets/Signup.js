import React from 'react';
import SignupForm from '@/components/SignupForm';
const axios = require('axios');
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import { useEffect, useState } from 'react';
import useInfo from "@/hooks/useInfo";

const Signup = () => {
    const baseURL = process.env.NEXT_PUBLIC_URL
    const router = useRouter();
    const { login } = useAuth();
    const { info } = useInfo();
    const gender = info.genders;
    const insurances = info.insurances;
    const listOfInsurances = [];
    Object.keys(insurances).forEach((insurancesKey) => {
      listOfInsurances.push(insurances[insurancesKey].insurance_name)
  });
    console.log(listOfInsurances)

    async function signupFormHandler(event) {
        event.preventDefault();
        const URL = `${baseURL}/accounts/signup/`;
        const headers = { 'Content-Type': 'application/json' };
        let formGender =event.target.gender.value;
        let formInsurance =event.target.insurance.value;
        let genderId = 0;
        let insuranceId = 0;
        gender.forEach(element => {
          if (formGender == element.gender){
            genderId = element.id
          }
        });
        insurances.forEach(element => {
          console.log(element)
          if (formInsurance == element.insurance_name){
            insuranceId = element.id
          }
        });
        const userData = {
          "username": event.target.username.value,
          "email": event.target.email.value,
          "password": event.target.password.value,
          "confirm_password": event.target.confirmPassword.value,
          "first_name": event.target.firstName.value,
          "last_name": event.target.lastName.value,
          "phone_num": event.target.phoneNumber.value,
          "gender": genderId,
          "insurance": insuranceId,
          "date_of_birth": event.target.dateOfBirth.value,
        }
        console.log(userData)
        // await axios.post(URL, userData, { headers })
        //   .then(response => {
        //     const responseData = response.data;
        //     login(userData.username,userData.password)
        //     router.push("/")
        //   })
        //   .catch(error => {
        //     try {
        //       if ("Passwords do not match." == error.response.data.non_field_errors[0]) {
        //         alert("Passwords do not match")
        //       }
        //     }
        //     catch (error) {
        //     }
        //     try {
        //       if ("A user with that username already exists." == error.response.data.username[0]) {
        //         alert("A user with that username already exists.")
        //       }
        //     }
        //     catch (error) {
        //     }
        //     console.error('Error', error.response.data);
        //   });
      }

    return (
        <>
            <SignupForm handler={signupFormHandler} insuranceProviders={listOfInsurances}/>
        </>
    );
}

export default Signup;