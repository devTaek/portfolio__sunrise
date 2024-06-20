import styled from "styled-components";

const PaginationContainre = styled.div`
  width: 179px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
    width: 16px;
    margin: 10px;
    border: none;
    border-radius: 100px;
    padding: 0 16px;
    color: white;
    cursor: pointer;
    background: none;
    font-size: 18px;
  `;

  function Pagination({
    totalDataLength,
    postsPerPage,
    setCurrentPage,
    currentPage
  }) {
  const pageList = [];

  // 현재 postsNum과 postsPerPage의 값이 같다.
  const totalPages = Math.ceil(totalDataLength / postsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  // if (totalPages === 1) {
  //   return null;
  // }
  return (
    <div className="pagination">
      <PaginationContainre>
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
      </PaginationContainre>
    </div>
  );
}
export default Pagination;