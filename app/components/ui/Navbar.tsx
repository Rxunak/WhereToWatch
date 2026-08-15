import { Input } from "../ui/input";
import React from "react";
import { Bookmark } from "lucide-react";

function Navbar() {
  return (
    <main className="flex justify-between pl-10 pr-10 pt-5 pb-5 border bg-bg h-auto">
      <div className="flex items-center">
        <h1 className="text-h4 text-text">Where to Watch</h1>
      </div>

      <div className="flex gap-6">
        <Input className="w-50" />
        <div className="flex gap-1.5 items-center">
          <Bookmark />
          <p>Watchlist</p>
          <span>2</span>
        </div>
        <button>Dark</button>
      </div>
    </main>
  );
}

export default Navbar;
