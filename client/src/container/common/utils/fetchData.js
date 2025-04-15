import axios from 'axios';

export async function fetchData(page, setData) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/${page}`, {
      withCredentials: true
    });
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}