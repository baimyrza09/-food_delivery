import React, { useContext, useEffect } from "react";
import { cafesContext } from "../contexts/CafesContext";

const Pagination = () => {
  const {contacts, postsPerPage, totalPosts, paginate, getCafes } = useContext(cafesContext);

  useEffect(() => {
    getCafes()
  }, []);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default Pagination;


