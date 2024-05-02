export async function fetchData(page, setData) {
  try {
    const response = await fetch(`http://localhost:5000/api/${page}`)
    if(!response.ok) {
      throw new Error('Failed to fetch data from server');
    }
    const data = await response.json();
    setData(data)
  } catch(error) {
    console.error('Error fetching data: ', error);
  }
}

// 서버는 3000에서 실행되고있으며, 
// 리액트 개발 서버에서 3000번이 사용되고 있어서 3001번으로 클라이언트를 실행.