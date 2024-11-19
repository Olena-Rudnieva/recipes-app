import React from 'react';
import { PaginationWrapper, PaginationButton, Dots } from './pagination.styled';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [...Array.from({ length: 7 }, (_, i) => i + 1), '...', totalPages];
    }

    if (currentPage > totalPages - 4) {
      return [
        1,
        '...',
        ...Array.from({ length: 7 }, (_, i) => totalPages - 6 + i),
      ];
    }

    return [
      1,
      '...',
      ...Array.from({ length: 5 }, (_, i) => currentPage - 2 + i),
      '...',
      totalPages,
    ];
  };

  const pageNumbers = getPageNumbers();

  const handlePageClick = (page: number | string) => {
    if (page === '...') return;
    onPageChange(page as number);
  };

  return (
    <PaginationWrapper>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ←
      </PaginationButton>
      {pageNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <Dots>...</Dots>
          ) : (
            <PaginationButton
              isActive={page === currentPage}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </PaginationButton>
          )}
        </React.Fragment>
      ))}
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        →
      </PaginationButton>
    </PaginationWrapper>
  );
};
