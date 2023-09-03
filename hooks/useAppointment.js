import { useAuth } from "@/contexts/auth";


export default function useAppointment() {
    const { token, logout } = useAuth();
    const baseURL = process.env.NEXT_PUBLIC_URL

    function config(){
        return {
            headers : { 'Content-Type': 'application/json' },
            "Authorization":"Bearer" + token
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
            })
            .catch(error => {
                errorHandler(error)
            });

    }

    function errorHandler(error) {
        console.log(error)
        logout()
    }

}