export async function fetchData(page, setData) {
  try {
    const response = await fetch(`http://15.164.204.237/:5000/api/${page}`, {
      method: 'get',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': 'http://15.164.204.237:5000'
      }
    })
    if(!response.ok) {
      throw new Error('Failed to fetch data from server');
    }
    const data = await response.json();
    setData(data)
  } catch(error) {
    console.error('Error fetching data: ', error);
  }
}
