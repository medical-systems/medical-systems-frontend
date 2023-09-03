import React from 'react';
import SignupForm from '@/components/SignupForm';
const axios = require('axios');


const Signup = () => {
    const baseURL = process.env.NEXT_PUBLIC_URL

    async function signupFormHandler(event) {
        event.preventDefault();
        const URL = `${baseURL}/accounts/signup/`;
        const headers = { 'Content-Type': 'application/json' };
        const userData = {
          "username": event.target.username.value,
          "email": event.target.email.value,
          "password": event.target.password.value,
          "confirm_password": event.target.confirmPassword.value,
          "first_name": event.target.firstName.value,
          "last_name": event.target.lastName.value,
          "phone_num": event.target.phoneNumber.value,
          "gender": 1,
          "insurance": 1,
          "date_of_birth": event.target.dateOfBirth.value,
        }
        await axios.post(URL, userData, { headers })
          .then(response => {
            const responseData = response.data;
            console.log(responseData)
          })
          .catch(error => {
            try {
              if ("Passwords do not match." == error.response.data.non_field_errors[0]) {
                alert("Passwords do not match")
              }
            }
            catch (error) {
            }
            try {
              if ("A user with that username already exists." == error.response.data.username[0]) {
                alert("A user with that username already exists.")
              }
            }
            catch (error) {
            }
            console.log('Error', error.response.data);
          });
        console.log(userData)
      }

    return (
        <>
            <SignupForm handler={signupFormHandler} />
        </>
    );
}

export default Signup;