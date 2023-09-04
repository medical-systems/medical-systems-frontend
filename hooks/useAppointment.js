import { useAuth } from "@/contexts/auth";
import { useState } from "react";
import useSWR from 'swr'


export default function useAppointment() {
    const baseURL = process.env.NEXT_PUBLIC_URL
    const { token, logout } = useAuth();
    const { appointments, error} = useSWR(`${baseURL}/api/v1/appointments/`,fetchAppointments)

    function config() {
        return {
            headers: { 'Content-Type': 'application/json' },
            "Authorization": "Bearer" + token
        }
    }

    async function fetchAppointments() {
        let url = `${baseURL}/api/v1/appointments/`
        const headers = { 'Content-Type': 'application/json' };
        if (!token) {
            return null
        }
        await axios.get(url, config())
            .then(response => {
                const responseData = response.data;
                console.log(responseData)
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
        response: appointments
    }

}