import axios from 'axios';

export async function fetchData(page, setData) {
  try {
    const response = await axios.get(`43.203.219.158:3001/api/${page}`, {
      withCredentials: true
    });
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}