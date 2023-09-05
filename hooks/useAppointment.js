import { useAuth } from "@/contexts/auth";
import { useState } from "react";
import useSWR from 'swr'
const axios = require('axios');

export default function useAppointment() {
    const baseURL = process.env.NEXT_PUBLIC_URL
    const { token, logout } = useAuth();
    const { data: appointments, error } = useSWR([`${baseURL}/api/v1/appointments/`, token], fetchAppointments)

    function config() {
        return {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token.access
            }
        }
    }

    async function fetchAppointments() {
        let url = `${baseURL}/api/v1/appointments/`
        if (!token) {
            return null
        }
        try {
            const response = await axios.get(url, config());
            const responseData = response.data;
            console.log(10101, responseData)
            return responseData;
        } catch (error) {
            errorHandler(error);
        }
    }

    async function createAppointments(AppointmentsData) {
        let url = `${baseURL}/api/v1/appointments/`
        if (!token) {
            return null
        }
        try {
            axios.POST
            const response = await axios.post(url,JSON.stringify(AppointmentsData), config());
            const responseData = response.data;
            console.log(202020, responseData)
            return responseData;
        } catch (error) {
            errorHandler(error);
        }
    }

    function errorHandler(error) {
        console.log(error);
        logout();
    }

    return {
        appointmentsList: appointments,
        createAppointments,
    }
}
