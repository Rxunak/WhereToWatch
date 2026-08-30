import React from "react";
import { Bookmark } from "lucide-react";

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
    <main className="flex flex-col gap-3 border rounded-sm w-60 p-3 outline-1 transition-transform duration-200 ease-out hover:shadow-lg hover:scale-105 cursor-pointer">
      <div className="border-10 border-gray-100/80 outline-1">
        <div className="border h-70 flex items-end">
          <img src={imageSrc} alt="" />
          {/* <h1 className="p-2 text-xl font-bold">{title}</h1> */}
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
