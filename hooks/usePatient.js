import useSWR from 'swr';
import axios from 'axios';
export default function usePatient() {
  const baseURL = process.env.NEXT_PUBLIC_URL;
  // Define a function to fetch doctors
  const fetchPatient = async () => {
    const url = `${baseURL}/accounts/patient/`;
    try {
      const response = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": "Bearer " + token.access
        }
      });
    
      return response.data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  };
  // Use the useSWR hook to fetch data with caching and revalidation
  const { data: patientsData, error: patientsError } = useSWR([`${baseURL}/accounts/patient/`], fetchPatient);
  // Define an error handler function
  const errorHandler = (error) => {
    console.error(error);
    // Handle the error or perform any necessary actions here
  };
  // Check for errors and call the error handler if needed
  if (patientsError) {
    errorHandler(patientsError);
  }
  return {
    patient: patientsData,
  };
}