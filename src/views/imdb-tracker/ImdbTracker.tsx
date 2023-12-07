import { useEffect, useState } from 'react';
import imdbTrackerService from '@services/ImdbTrackerService';
import { useQuery } from '@tanstack/react-query';
import { imdb, imdbEach } from '../../interfaces/asdas';

function ImdbTracker() {
  const [currentPage, setCurrentPage] = useState(1);
  const query = useQuery({ queryKey: ['todos', currentPage], queryFn: () => imdbTrackerService.home(currentPage) });
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const getTotalPages = (totalRows: number, pageSize: number = 10): number => Math.ceil(totalRows / pageSize);
  const renderPagination = () => {
    return [...Array(10).keys()].map(() => {
      return (
          <>
            <button
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </button>
            <button
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </button>
          </>
      )
    })
  };
  return (
    <>
      {currentPage}

      <h1 className="text-3xl font-bold">Imdb Tracker</h1>
      <div className="container mb-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {
                        !query.isLoading ? query.data?.Search.map((item: imdbEach) => (

                          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={item.imdbID}>
                            {getTotalPages(query.data.totalResults)}
                            {query.data.totalResults}
                            <article className="overflow-hidden rounded-lg shadow-lg">

                              <a href="#">
                                <img
                                  alt="Placeholder"
                                  className="block max-h-[400px] w-full"
                                  src={item.Poster}
                                />
                              </a>

                              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h2 className="text-lg">
                                  <a
                                    className="no-underline hover:underline text-black font-bold"
                                    href="#"
                                  >
                                    {item.Title}
                                  </a>
                                </h2>

                              </header>

                              <footer
                                className="flex items-center justify-between leading-none px-2 pb-2 md:px-4 md:pb-4"
                              >
                                <p className="text-grey-darker text-sm">
                                  Year:
                                  {' '}
                                  {item.Year}
                                </p>
                                <p className="text-grey-darker text-sm">
                                  #
                                  {item.Type}
                                </p>
                              </footer>

                            </article>

                          </div>
                        )) : (
                          <div
                            className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin mx-auto mt-10"
                          />
                        )
                    }

        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 justify-center">

          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button
                onClick={() => onPageChange(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {
                renderPagination(getTotalPages(query?.data?.totalResults))
              }
              <button
                onClick={() => onPageChange(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImdbTracker;
