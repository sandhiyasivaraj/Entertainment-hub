import React from "react";
import Pagination from "@material-ui/lab/Pagination";

interface PaginationProps {
  setPage: CallableFunction,
  numOfPages?:number,
}

export default function CustomPagination({ setPage, numOfPages = 10 }: PaginationProps) {
  // Scroll to top when page changes
  const handlePageChange = (eventTarget: any) => {
    console.log(eventTarget?.textContent,"page inside handlePagination")
    setPage(Number(eventTarget?.textContent));
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
        <Pagination
          onChange={(e) => handlePageChange(e.target)}
          count={numOfPages}
          color="primary"
          hideNextButton
          hidePrevButton
        />
    </div>
  );
}
