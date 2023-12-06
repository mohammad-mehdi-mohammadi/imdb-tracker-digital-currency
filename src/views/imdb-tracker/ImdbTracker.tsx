import { useEffect, useState } from 'react';
import imdbTrackerService from '@services/ImdbTrackerService';
import { useQuery } from '@tanstack/react-query';
import {imdb, imdbEach} from "../../interfaces/asdas";

function ImdbTracker() {
  const query = useQuery({ queryKey: ['todos'], queryFn: imdbTrackerService.home });
  return (
    <>

      <h1 className="text-3xl font-bold">Imdb Tracker</h1>
      <div className="container mb-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {
            !query.isLoading ? query.data?.Search.map((item: imdbEach) => (

              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={item.imdbID}>

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

    </>
  );
}

export default ImdbTracker;
