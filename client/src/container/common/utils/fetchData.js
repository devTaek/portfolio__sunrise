import axios from 'axios';

export async function fetchData(page, setData) {
  try {
    const response = await axios.get(`http://localhost:3001/api/${page}`);
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}