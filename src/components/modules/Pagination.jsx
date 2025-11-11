import style from "./styles/Pagination.module.css";
function Pagination({ page, setPage }) {
  const paginationHandeling = (event) => {
    setPage(Number(event.target.innerHTML));
  };
  const previousHandeler = () => {
    if (page <= 1) {
      return;
    } else {
      setPage((page) => page - 1);
    }
  };
  const nextHandeler = () => {
    if (page >= 4) {
      return;
    } else {
      setPage((page) => page + 1);
    }
  };
  return (
    <div className={style.pagination}>
      <button
        className={page === 1 ? style.disabled : null}
        onClick={previousHandeler}
      >
        Previous
      </button>
      <p
        className={page === 1 ? style.selected : ""}
        onClick={paginationHandeling}
      >
        1
      </p>
      <p
        className={page === 2 ? style.selected : ""}
        onClick={paginationHandeling}
      >
        2
      </p>
      <p
        className={page === 3 ? style.selected : ""}
        onClick={paginationHandeling}
      >
        3
      </p>
      <p
        className={page === 4 ? style.selected : ""}
        onClick={paginationHandeling}
      >
        4
      </p>
      {/* {page > 2 && page < 4 && (
        <>
          <span>...</span>
          <p style={ color: page > 2 && page < 4 ? "red" : "inherit" }}>
            {page}
          </p>
        </>
      )} */}

      <button
        onClick={nextHandeler}
        className={page === 4 ? style.disabled : null}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
