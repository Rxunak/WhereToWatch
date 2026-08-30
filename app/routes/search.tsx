import React, { useState } from "react";
import { searchFilterOptions } from "./constants/searchConstants";
import MovieCard from "~/components/movie/MovieCard";
import { useLoaderData } from "react-router";
import { searchMultiple, getWatchProviders } from "~/lib/tmdb.server";
import { REGION } from "./constants/searchConstants";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const data = await searchMultiple(query);

  const results = data.results.filter(
    (item: any) => item.media_type !== "person",
  );

  const withProviders = await Promise.all(
    results.map(async (item: any) => ({
      ...item,
      providers: await getWatchProviders(item.id, item.media_type),
    })),
  );

  return { data: withProviders, query };
}

function categorize(providers: any): string[] {
  const region = providers?.results?.[REGION];
  if (!region) return [];

  const categories: string[] = [];
  if (region.flatrate) categories.push("Subscription");
  if (region.rent) categories.push("Rent");
  if (region.buy) categories.push("Buy");

  console.log(categories);

  return categories;
}

function search() {
  const [toggle, setToggle] = useState("All");
  const { data, query } = useLoaderData<typeof loader>();

  function updateToggle(items: string) {
    setToggle(items);
  }

  return (
    <main className="flex flex-col gap-10 pl-10 pr-10 pt-8 pb-8 bg-white min-h-screen">
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-amber-700 text-sm tracking-widest">Results</h1>
          <h1 className="font-bold text-4xl">"{query}"</h1>
        </div>
        <div className="flex items-center h-10 rounded-md">
          {searchFilterOptions.map((item, index) => (
            <div
              key={index}
              className={`${toggle === item ? "text-amber-700 border-amber-700 border-r-1" : ""} text-sm p-2 font-medium border first:rounded-l-sm last:rounded-r-sm cursor-pointer hover:bg-gray-300/30 border-r-0 last:border-r`}
              onClick={() => updateToggle(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h1 className="text-gray-500">{data.length} titles</h1>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {data
            .filter(
              (item: any) =>
                item.media_type !== "person" &&
                item.providers.results[REGION] &&
                (toggle === "All" ||
                  categorize(item.providers).includes(toggle)),
            )
            .map((item: any) => (
              <MovieCard
                key={item.id}
                title={item.title ?? item.name}
                mediaType={item.media_type}
                releaseDate={item.release_date ?? item.first_air_date}
                imageSrc={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                navigation={"/movie"}
              />
            ))}
        </div>
      </section>
    </main>
  );
}

export default search;
