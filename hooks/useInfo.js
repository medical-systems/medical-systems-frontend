import useSWR from 'swr';
import axios from 'axios';
export default function useInfo() {
  const baseURL = process.env.NEXT_PUBLIC_URL;
  // Define a function to fetch information
  const fetchInfo = async () => {
    const url = `${baseURL}/static_tables_info/`;
    try {
      const response = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Info data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching info:', error);
      throw error;
    }
  };
  // Use the useSWR hook to fetch data with caching and revalidation
  const { data: infoData, error: infoError } = useSWR([`${baseURL}/static_tables_info/`], fetchInfo);
  // Define an error handler function
  const errorHandler = (error) => {
    console.error(error);
    // Handle the error or perform any necessary actions here
  };
  // Check for errors and call the error handler if needed
  if (infoError) {
    errorHandler(infoError);
  }
  return {
    info: infoData,
  };
}