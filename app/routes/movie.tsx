import React from "react";
import { MoveLeft, Star } from "lucide-react";
import { data, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { movieDetails, availabilityGroups } from "./constants/movieConstants";
import { getWatchProviders, getMovieDetails } from "~/lib/tmdb.server";
import { useLoaderData } from "react-router";
import { REGION } from "./constants/searchConstants";
import { time_convert } from "./constants/movieConstants";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const movieId = Number(url.searchParams.get("id") ?? "");

  const item = await getMovieDetails(movieId);
  const providers = await getWatchProviders(movieId, "movie");

  return {
    data: { ...item, media_type: "movie", providers },
    query,
    movieId,
  };
}

function movie() {
  const { data: item } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const hasProvidersInRegion = Boolean(item.providers.results[REGION]);

  console.log(item.genres.map((genre: any) => genre.name));

  return (
    <main className="flex flex-col gap-5 bg-white min-h-screen p-10">
      <section
        className="flex gap-3 text-amber-700 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <MoveLeft />
        <h1>Back to results</h1>
      </section>
      <div className="flex gap-10">
        <section className="flex flex-col gap-5 w-1/5">
          <div className="border-10 border-gray-100/80 outline-1 w-full flex flex-col gap-5">
            <img
              className="border h-90"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            ></img>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-700/8 hover:text-amber-700 cursor-pointer rounded-sm"
            >
              Add to watchlist
            </Button>
            <Button variant="outline" className="rounded-sm">
              Share
            </Button>
          </div>
        </section>
        <section className="w-4/5 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-1 ">
              {item.genres.map((genre: any, index: number) => (
                <React.Fragment key={genre.id}>
                  {index > 0 && <span className=" text-amber-700">·</span>}
                  <span className="text-caption text-amber-700 text-sm text-transform:uppercase">
                    {genre.name}
                  </span>
                </React.Fragment>
              ))}
            </div>

            <h1 className="text-h2 text-text">{item.original_title}</h1>
            <div className="flex items-center gap-2 text-small text-gray-500">
              <span>{item.media_type}</span>
              <span>·</span>
              <span>{item.release_date.substring(0, 4)}</span>
              <span>·</span>
              <span>{time_convert(item.runtime)}</span>
              <span className="flex items-center gap-1 text-amber-700">
                <Star className="size-3.5 fill-amber-700" />
                {item.popularity.toFixed(1)}
              </span>
            </div>
            <p className="text-body text-gray-600 max-w-2xl">{item.overview}</p>
          </div>

          <div className="border-t" />

          {hasProvidersInRegion && (
            <div className="flex flex-col gap-6">
              <div className="flex items-baseline justify-between">
                <h2 className="text-h5 text-text">Where to watch</h2>
                <span className="text-caption text-gray-400">
                  {movieDetails.region} · {movieDetails.updatedLabel}
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {availabilityGroups.map((group) => (
                  <div key={group.key} className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-2 border-b pb-2">
                      <h3 className="font-semibold text-sm text-text">
                        {group.title}
                      </h3>
                      <span className="text-caption text-gray-400">
                        {group.caption}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      {group.offers.map((offer) => (
                        <div
                          key={offer.service}
                          className="flex items-center justify-between border-b py-3 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 text-small ${offer.borderClass}`}
                            >
                              <span
                                className={`size-2 rounded-full ${offer.dotClass}`}
                              />
                              {offer.service}
                            </span>
                            <span className="text-small text-gray-400">
                              {offer.note}
                            </span>
                          </div>
                          <Button
                            variant="outline"
                            className="border-amber-700 text-amber-700 hover:bg-amber-700/8 hover:text-amber-700 cursor-pointer rounded-sm"
                          >
                            {offer.cta}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default movie;
