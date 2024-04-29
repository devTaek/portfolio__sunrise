export async function fetchData(page, setData) {
  try {
    const response = await fetch(`http://13.125.20.21:3001/api/${page}`)
    if(!response.ok) {
      throw new Error('Failed to fetch data from server');
    }
    const data = await response.json();
    setData(data)
  } catch(error) {
    console.error('Error fetching data: ', error);
  }
}