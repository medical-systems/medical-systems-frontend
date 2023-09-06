import useSWR from 'swr';
import axios from 'axios';
export default function useDoctors() {
  const baseURL = process.env.NEXT_PUBLIC_URL;
  // Define a function to fetch doctors
  const fetchDoctors = async () => {
    const url = `${baseURL}/accounts/doctors/`;
    try {
      const response = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  };
  // Use the useSWR hook to fetch data with caching and revalidation
  const { data: doctorsData, error: doctorsError } = useSWR([`${baseURL}/accounts/doctors/`], fetchDoctors);
  // Define an error handler function
  const errorHandler = (error) => {
    console.error(error);
    // Handle the error or perform any necessary actions here
  };
  // Check for errors and call the error handler if needed
  if (doctorsError) {
    errorHandler(doctorsError);
  }
  return {
    doctors: doctorsData,
  };
}