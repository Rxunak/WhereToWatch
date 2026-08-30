import React from "react";
import { searchFilterOptions } from "./constants/searchConstants";
import MovieCard from "~/components/movie/MovieCard";
import { useNavigate, useLoaderData } from "react-router";
import { searchMultiple } from "~/lib/tmdb.server";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const data = await searchMultiple(query);
  return { data, query };
}

function search() {
  const navigate = useNavigate();
  const { data, query } = useLoaderData<typeof loader>();

  console.log(data);

  return (
    <main
      className="flex flex-col gap-10 pl-10 pr-10 pt-8 pb-8 bg-white min-h-screen"
      onClick={() => navigate("/movie")}
    >
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-amber-700 text-sm tracking-widest">Results</h1>
          <h1 className="font-bold text-4xl">"{query}"</h1>
        </div>
        <div className="flex items-center h-10 rounded-md">
          {searchFilterOptions.map((item, index) => (
            <div
              key={index}
              className="text-sm p-2 font-medium border first:rounded-l-sm last:rounded-r-sm cursor-pointer hover:bg-gray-300/30 border-r-0 last:border-r"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-gray-500">{data.results.length} titles</h1>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {data.results
            .filter((item: any) => item.media_type !== "person")
            .map((item: any) => (
              <MovieCard
                key={item.id}
                title={item.title ?? item.name}
                mediaType={item.media_type}
                releaseDate={item.release_date ?? item.first_air_date}
                imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default search;
