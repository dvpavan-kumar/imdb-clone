import React, { useEffect, useState } from "react";

const Pagination = ({ onPageChange, totalPages }) => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [totalPagesCount, setTotalPagesCount] = useState();
  const THRESHOLD = 10;

  const setNewPageList = (pageNo) => {
    const itemsLength = Math.min(totalPages, THRESHOLD);
    let itemsOnLeft = Math.ceil(THRESHOLD / 2) - 1;
    let startingPage = Math.max(pageNo - itemsOnLeft, 1);

    if (startingPage + itemsLength > totalPages) {
      startingPage = totalPages - itemsLength + 1;
    }
    const list = Array.from(
      { length: Math.min(totalPages, THRESHOLD) },
      (_, i) => i + startingPage
    );
    setPages(list);
  };

  const handleClick = (pageNo) => {
    onPageChange(pageNo);
    setCurrentPage(pageNo);
    setNewPageList(pageNo);
  };

  useEffect(() => {
    setTotalPagesCount(totalPages);
    let list = Array.from(
      { length: Math.min(totalPages, THRESHOLD) },
      (_, i) => i + 1
    );
    setPages(list);
  }, [totalPages]);

  return (
    <div className="pagination">
      <button
        onClick={() => handleClick(currentPage - pages[0])}
        disabled={currentPage == 1}
      >
        Previous
      </button>
      {pages?.map((page) => (
        <button
          className={currentPage === page ? "active" : ""}
          key={page}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage == pages[pages.length - 1]}
      >
        Next
      </button>
      <span>
        Page {currentPage} of {totalPagesCount}
      </span>
    </div>
  );
};

export default Pagination;
