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
        <div className="flex  h-10 rounded-md border">
          {searchFilterOptions.map((item, index) => (
            <div key={index} className="border-r p-2 last:border-r-0">
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
