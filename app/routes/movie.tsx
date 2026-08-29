import React from "react";
import { MoveLeft, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import {
  movieDetails,
  availabilityGroups,
} from "./constants/movieConstants";

function movie() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col gap-5 bg-white min-h-screen p-10">
      <section
        className="flex gap-3 text-amber-700 cursor-pointer"
        onClick={() => navigate("/search")}
      >
        <MoveLeft />
        <h1>Back to results</h1>
      </section>
      <div className="flex gap-10">
        <section className="flex flex-col gap-5 w-1/5">
          <div className="border-10 border-gray-100/80 outline-1 w-full flex flex-col gap-5">
            <div className="border h-90 bg-blue-200 flex items-end">
              <h1 className="p-2 text-xl font-bold">Arrival</h1>
            </div>
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
            <h1 className="text-h2 text-text">{movieDetails.title}</h1>
            <div className="flex items-center gap-2 text-small text-gray-500">
              <span>{movieDetails.type}</span>
              <span>·</span>
              <span>{movieDetails.year}</span>
              <span>·</span>
              <span>{movieDetails.runtime}</span>
              <span className="flex items-center gap-1 text-amber-700">
                <Star className="size-3.5 fill-amber-700" />
                {movieDetails.rating}
              </span>
            </div>
            <p className="text-body text-gray-600 max-w-2xl">
              {movieDetails.synopsis}
            </p>
          </div>

          <div className="border-t" />

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
        </section>
      </div>
    </main>
  );
}

export default movie;
