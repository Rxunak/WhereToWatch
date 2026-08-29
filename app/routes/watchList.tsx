import React from "react";
import MovieCard from "~/components/movie/MovieCard";

function watchList() {
  return (
    <main className="bg-white min-h-screen p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-amber-700 text-sm tracking-widest">
          SAVED ON THIS DEVICE
        </h1>
        <h1 className="font-bold text-4xl">"Arrival"</h1>
      </div>

      <section className="flex flex-col gap-4">
        <h1 className="text-gray-500">1 title</h1>
        <MovieCard />
      </section>
    </main>
  );
}

export default watchList;
