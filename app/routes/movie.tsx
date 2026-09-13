import React, { useEffect, useState } from "react";
import { MoveLeft, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { availabilityGroups, getProviderUrl } from "./constants/movieConstants";
import {
  getWatchProviders,
  getMovieDetails,
  getTVDetails,
} from "~/lib/tmdb.server";
import { useLoaderData } from "react-router";
import { REGION } from "./constants/searchConstants";
import { time_convert } from "./constants/movieConstants";
import {
  isInWatchlist,
  toggleWatchlist,
  type SavedMovie,
} from "~/lib/watchList";

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") ?? "";
  const movieId = Number(url.searchParams.get("id") ?? "");
  const mediaType = url.searchParams.get("type") === "tv" ? "tv" : "movie";

  const item =
    mediaType === "tv"
      ? await getTVDetails(movieId)
      : await getMovieDetails(movieId);
  const providers = await getWatchProviders(movieId, mediaType);

  const normalized =
    mediaType === "tv"
      ? {
          ...item,
          original_title: item.original_name ?? item.name,
          release_date: item.first_air_date,
          runtime: item.episode_run_time?.[0],
        }
      : item;

  return {
    data: { ...normalized, media_type: mediaType, providers },
    query,
    movieId,
  };
}

function movie() {
  const { data: item, movieId } = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const hasProvidersInRegion = Boolean(item.providers.results[REGION]);
  const providerForRegion = item?.providers?.results[REGION];

  const savedMovie: SavedMovie = {
    id: movieId,
    title: item.original_title,
    mediaType: item.media_type,
    releaseDate: item.release_date,
    imageSrc: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
  };
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(isInWatchlist(savedMovie));
  }, [movieId]);

  const handleToggleWatchlist = () => {
    setIsSaved(toggleWatchlist(savedMovie));
  };

  const groups = hasProvidersInRegion
    ? availabilityGroups
        .map((group: any) => ({
          ...group,
          offers: providerForRegion[group?.key] ?? [],
        }))
        .filter((group: any) => group.offers.length > 0)
    : [];

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
              alt={`${item.original_title} poster`}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-700/8 hover:text-amber-700 cursor-pointer rounded-sm"
              onClick={handleToggleWatchlist}
            >
              {isSaved ? "Remove from watchlist" : "Add to watchlist"}
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
                {item.vote_average.toFixed(1)}
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
                  {"United Kingdom"}
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {groups.map((group) => (
                  <div key={group.key} className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-2 border-b pb-2">
                      <h3 className="font-semibold text-sm text-text">
                        {group.title}
                      </h3>
                      <span className="text-caption text-gray-400">
                        {group.caption}
                      </span>
                    </div>
                    <div className="flex flex-row justify-evenly">
                      {group.offers.map((offer: any) => (
                        <div
                          key={offer.provider_id}
                          className="flex items-center justify-between py-3 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            <a
                              href={getProviderUrl(
                                offer.provider_name,
                                providerForRegion.link,
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-row cursor-pointer transition-transform duration-150 ease-out hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-amber-700 focus-visible:outline-offset-2 rounded-sm"
                            >
                              <img
                                src={`https://image.tmdb.org/t/p/w500${offer.logo_path}`}
                                alt={offer.provider_name}
                                className="size-15 transition-opacity duration-150 hover:opacity-80"
                              />
                            </a>
                          </div>
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
