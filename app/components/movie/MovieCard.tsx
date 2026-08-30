import React from "react";
import { Bookmark } from "lucide-react";
import { noMoviePoster } from "./constants/movieCardConstants";

type MovieCardsProps = {
  title: string;
  mediaType: string;
  releaseDate: string;
  imageSrc: string;
};

function MovieCard({
  title,
  mediaType,
  releaseDate,
  imageSrc,
}: MovieCardsProps) {
  return (
    <main className="flex flex-col justify-between gap-3 border rounded-sm w-60 p-3 outline-1 transition-transform duration-200 ease-out hover:shadow-lg hover:scale-105 cursor-pointer">
      <div className="border-10 border-gray-100/80 outline-1 h-full">
        <div className="border h-full w-full flex justify-center items-center">
          <img
            src={imageSrc === noMoviePoster ? "public/noImage.png" : imageSrc}
            alt=""
            className={`${imageSrc === noMoviePoster ? "size-20" : ""} object-cover`}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">{title}</h1>
          <h2 className="text-gray-400">
            {mediaType}{" "}
            <span className="inline-block size-1 rounded-full bg-current align-middle" />{" "}
            {releaseDate.substring(0, 4)}
          </h2>
        </div>
        <Bookmark className="size-5 text-amber-700" />
      </div>
    </main>
  );
}

export default MovieCard;
