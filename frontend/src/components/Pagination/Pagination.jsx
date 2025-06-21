import React from "react";
import "./Pagination.css";

const Pagination = (props) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((item, index) => {
        return (
          <div>
            <button
              key={index}
              onClick={() => {
                props.setCurrentPage(item);
              }}
              className={item === props.currentPage ? "active" : ""}
            >
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
