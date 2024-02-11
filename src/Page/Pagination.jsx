import styled from "styled-components";

const Button = styled.button`
    width: 50px;
    height: 50px;
    margin: 40px;
    border: none;
    border-radius: 100px;
    background-color: black;
    color: white;
    cursor: pointer;
  `;

  function Pagination({
    postsNum,
    postsPerPage,
    setCurrentPage,
    currentPage
  }) {
    

  const pageList = [];
  const totalPages = Math.ceil(postsNum / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  
  if (totalPages === 1) {
    return null;
  }
  return (
    <div className="pagination">
      <Button onClick={goToPrevPage} disabled={currentPage === 1}>
        ◀️
      </Button>

      {pageList.map((page) => (
        <Button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </Button>
      ))}

      <Button onClick={goToNextPage} disabled={currentPage === pageList.length}>
        ▶️
      </Button>
    </div>
  );
}
export default Pagination;