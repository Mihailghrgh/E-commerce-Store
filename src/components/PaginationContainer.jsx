import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  ////Creating a new array to match the pages count with Array From
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const visiblePages = 6;
  const startPage = Math.max(1, page - Math.floor(visiblePages / 2));
  const endPage = Math.min(pageCount, startPage + visiblePages - 1);

  const displayedPages = pages.slice(startPage - 1, endPage);

  const { search, pathname } = useLocation();

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-center ">
      <div className="join">
        <button
          className="btn btn-md bg-secondary-content"
          onClick={() => handlePageChange(page > 1 ? page - 1 : pageCount)}
        >
          Prev
        </button>
        {/* Render only limited pages */}
        {displayedPages.map((item) => (
          <button
            key={item}
            onClick={() => handlePageChange(item)}
            className={`btn join-item ${
              item === page ? " bg-primary " : " bg-secondary-content"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          className="btn btn-md bg-secondary-content"
          onClick={() => handlePageChange(page < pageCount ? page + 1 : 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
