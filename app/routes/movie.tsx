import React from "react";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";

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
        <section className="w-4/5">
          <div className="border ">Second one</div>
        </section>
      </div>
    </main>
  );
}

export default movie;
