import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  console.log(meta);

  ////Creating a new array to match the pages count with Array From 
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
  };
  if (pageCount < 2) return null;
  console.log(pages);
  
  return (
    <div className="mt-16 flex justify-center sm:justify-end">
      <div className="join">
        <button
          className="btn btn-md"
          onClick={() => {
            handlePageChange("prev");
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
            handlePageChange("next");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
