import useSWR from 'swr'
const axios = require('axios');


export default function usePatient() {
    const baseURL = process.env.NEXT_PUBLIC_URL
    const { doctors, error} = useSWR([`${baseURL}/accounts/doctors/`],fetchPatient)

    function config() {
        return {
            headers: { 'Content-Type': 'application/json' }
        }
    }

    async function fetchPatient() {
        let url = `${baseURL}/accounts/doctors/`
        await axios.get(url, config())
            .then(response => {
                const responseData = response.data;
                return responseData
            })
            .catch(error => {
                errorHandler(error)
            });

    }

    function errorHandler(error) {
        console.log(error)
        logout()
    }

    return {
        response: doctors
    }

}