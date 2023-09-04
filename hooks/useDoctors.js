import useSWR from 'swr'
const axios = require('axios');


export default function useDoctors() {
    const baseURL = process.env.NEXT_PUBLIC_URL
    const { data, error} = useSWR([`${baseURL}/accounts/doctors/`],fetchDoctors)

    function config() {
        return {
            headers: { 'Content-Type': 'application/json' }
        }
    }

    async function fetchDoctors() {
        let url = `${baseURL}/accounts/doctors/`
        await axios.get(url, config())
            .then(response => {
                const responseData = response.data;
                console.log(15,data)
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
        doctors: data
    }

}