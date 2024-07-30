import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./style.css"; // Import the CSS file

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="shop-pagination text-center">
      <div className="pagination">
        <ul>
          <li>
            <a
              onClick={(event) => {
                event.preventDefault();
                if (currentPage > 1) onPageChange(currentPage - 1);
              }}
              className={currentPage === 1 ? "disabled" : ""}
            >
              <ArrowBackIos />
            </a>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <a
                href="#"
                className={currentPage === index + 1 ? "active" : ""}
                onClick={(event) => {
                  event.preventDefault();
                  onPageChange(index + 1);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              
              onClick={(event) => {
                event.preventDefault();
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
              className={currentPage === totalPages ? "disabled" : ""}
            >
              <ArrowForwardIos />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
