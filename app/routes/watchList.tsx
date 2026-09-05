import React, { useEffect, useState } from "react";
import MovieCard from "~/components/movie/MovieCard";

type SavedMovie = {
  title: string;
  mediaType: string;
  releaseDate: string;
  imageSrc: string;
};

function watchList() {
  const [movieData, setMovieData] = useState<SavedMovie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("MovieCardDetails");
    if (stored) {
      const parsed = JSON.parse(stored);
      setMovieData(Array.isArray(parsed) ? parsed : [parsed]);
    }
  }, []);

  return (
    <main className="bg-white min-h-screen p-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-amber-700 text-sm tracking-widest">
          SAVED ON THIS DEVICE
        </h1>
        <h1 className="font-bold text-4xl">My Watchlist</h1>
      </div>

      <section className="flex flex-col gap-4">
        <h1 className="text-gray-500">{movieData.length} titles</h1>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {movieData.map((movie) => (
            <MovieCard
              key={`${movie.title}-${movie.mediaType}`}
              title={movie.title}
              mediaType={movie.mediaType}
              releaseDate={movie.releaseDate}
              imageSrc={movie.imageSrc}
              navigation="/movie"
              onSavedChange={(isSaved) => {
                if (!isSaved) {
                  setMovieData((prev) =>
                    prev.filter(
                      (m) =>
                        !(
                          m.title === movie.title &&
                          m.mediaType === movie.mediaType
                        ),
                    ),
                  );
                }
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default watchList;
