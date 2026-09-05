import React, { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { noMoviePoster } from "./constants/movieCardConstants";
import { useNavigate } from "react-router";

type MovieCardsProps = {
  title: string;
  mediaType: string;
  releaseDate: string;
  imageSrc: string;
  navigation: string;
  onSavedChange?: (isSaved: boolean) => void;
};

function MovieCard({
  title,
  mediaType,
  releaseDate,
  imageSrc,
  navigation,
  onSavedChange,
}: MovieCardsProps) {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const MC = {
    title: title,
    mediaType: mediaType,
    releaseDate: releaseDate,
    imageSrc: imageSrc,
  };

  const isSameMovie = (movie: typeof MC) =>
    movie.title === MC.title && movie.mediaType === MC.mediaType;

  const getSavedMovies = (): (typeof MC)[] => {
    const stored = localStorage.getItem("MovieCardDetails");
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [parsed];
  };

  useEffect(() => {
    setIsSaved(getSavedMovies().some(isSameMovie));
  }, [title, mediaType]);

  const toggleSaved = () => {
    const saved = getSavedMovies();
    const alreadySaved = saved.some(isSameMovie);

    const next = alreadySaved
      ? saved.filter((movie) => !isSameMovie(movie))
      : [...saved, MC];

    localStorage.setItem("MovieCardDetails", JSON.stringify(next));
    setIsSaved(!alreadySaved);
    onSavedChange?.(!alreadySaved);
  };

  return (
    <main className="flex flex-col justify-between gap-3 border rounded-sm w-60 p-3 outline-1 transition-transform duration-200 ease-out hover:shadow-lg hover:scale-105 cursor-pointer">
      <div className="border-10 border-gray-100/80 outline-1 h-full">
        <div className="border h-full w-full flex justify-center items-center">
          <img
            src={imageSrc === noMoviePoster ? "noImage.png" : imageSrc}
            alt=""
            className={`${imageSrc === noMoviePoster ? "size-20" : ""} object-cover`}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1
            className="text-xl font-bold hover:text-amber-700"
            onClick={() => navigate(navigation)}
          >
            {title}
          </h1>
          <h2 className="text-gray-400">
            {mediaType}{" "}
            <span className="inline-block size-1 rounded-full bg-current align-middle" />{" "}
            {releaseDate?.substring(0, 4)}
          </h2>
        </div>
        <Bookmark
          className="size-5 text-amber-700"
          fill={isSaved ? "currentColor" : "none"}
          onClick={() => toggleSaved()}
        />
      </div>
    </main>
  );
}

export default MovieCard;
