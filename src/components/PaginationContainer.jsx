import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  ////Creating a new array to match the pages count with Array From
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-center sm:justify-end">
      <div className="join">
        <button
          className="btn btn-md"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) {
              prevPage === pageCount;
            }
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((item) => {
          return (
            <button
              key={item}
              onClick={() => handlePageChange(item)}
              className={`btn btn-md border-none join-item ${
                item === page ? " border-base-300" : ""
              }`}
            >
              {item}
            </button>
          );
        })}
        <button
          className="btn btn-md"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) {
              nextPage === 1;
            }
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
