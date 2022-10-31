import React from 'react';

function Pagination({ totalPages, handleClick, handleNext, handlePrev }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // console.log(pages)

  return (
    <div className="pagination">
      <button className="prevButton" onClick={handlePrev}>
        Prev
      </button>
      {pages.map((pageNum) => {
        return (
          <button
            className="page__button"
            key={pageNum}
            onClick={() => handleClick(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}
      <button className="nextButton" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
