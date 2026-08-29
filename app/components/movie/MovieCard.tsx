import React from "react";
import { Bookmark } from "lucide-react";

function MovieCard() {
  return (
    <main className="flex flex-col gap-3 border rounded-sm w-70 p-3 outline-1">
      <div className="border-10 border-gray-100/80 outline-1">
        <div className="border h-90 bg-blue-200 flex items-end">
          <h1 className="p-2 text-xl font-bold">Arrival</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Arrival</h1>
          <h2 className="text-gray-400">
            Film{" "}
            <span className="inline-block size-1 rounded-full bg-current align-middle" />{" "}
            2016
          </h2>
          <div className="bg-red-500 size-2 rounded-full"></div>
        </div>
        <Bookmark className="size-5 text-amber-700" />
      </div>
    </main>
  );
}

export default MovieCard;
