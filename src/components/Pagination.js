import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, totalPages, basePath }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;
  const prevPage = currentPage - 1 === 1 ? basePath : `${basePath}/${currentPage - 1}`;
  const nextPage = `${basePath}/${currentPage + 1}`;

  // Define the range of pages to show in pagination
  const pageRange = 2; // Number of pages to show before and after the current page
  const startPage = Math.max(1, currentPage - pageRange);
  const endPage = Math.min(totalPages, currentPage + pageRange);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <p className="text-left">
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
          </p>
        </div>            
        <div className="col-sm">
          <p className="text-center">
            {startPage > 1 && (
              <>
                <Link to={basePath}>1</Link>
                {startPage > 2 && <span>...</span>}
              </>
            )}
            {pages.map(page => (
              <Link key={`pagination-number${page}`} to={page === 1 ? basePath : `${basePath}/${page}`}>
                &nbsp;&nbsp;&nbsp;{page}&nbsp;&nbsp;&nbsp;
              </Link>
            ))}
            {endPage < totalPages && (
              <>
                {endPage < totalPages - 1 && <span>...</span>}
                <Link to={`${basePath}/${totalPages}`}>{totalPages}</Link>
              </>
            )}
          </p>
        </div>
        <div className="col-sm">
          <p className="text-right">
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </p>
        </div>
      </div>         
    </div>
  );
};

export default Pagination;
