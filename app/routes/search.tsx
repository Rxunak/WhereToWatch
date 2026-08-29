import React from "react";
import { searchFilterOptions } from "./constants/searchConstants";

function search() {
  return (
    <main className="pl-10 pr-10 pt-8 pb-8">
      <section className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-amber-700 text-sm tracking-widest">RESULTS</h1>
          <h1 className="font-bold text-4xl">"Arrival"</h1>
        </div>
        <div className="flex items-center h-10 rounded-md">
          {searchFilterOptions.map((item, index) => (
            <div
              key={index}
              className="text-sm p-2 font-medium border first:rounded-l-sm last:rounded-r-sm cursor-pointer hover:bg-gray-300/30 border-r-0 last:border-r-1"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default search;
