import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";
import { Button } from "./button";
import { useNavigate } from "react-router";
import SearchInput from "../shared/SearchInput";
import { getSavedMovies } from "~/lib/watchList";

function Navbar() {
  let navigate = useNavigate();
  let [numberOfSavedMovies, setNumberOfSavedMovies] = useState(0);

  useEffect(() => {
    setNumberOfSavedMovies(getSavedMovies().length);
  }, []);

  return (
    <main className="flex justify-between pl-10 pr-10 pt-3 pb-3 border h-auto bg-white">
      <div className="flex items-center">
        <h1
          className="text-h4 text-text cursor-pointer"
          onClick={() => navigate("/")}
        >
          Where to Watch
        </h1>
      </div>

      <div className="flex gap-6">
        <SearchInput className="w-70" showButton={false} />
        <div className="flex gap-1.5 items-center ">
          <div className="flex gap-2 items-center hover:text-amber-700 cursor-pointer">
            <Bookmark className="size-4" />
            <p onClick={() => navigate("/watchList")}>Watchlist</p>
          </div>

          <span className="bg-amber-100 w-5 rounded-sm flex justify-center">
            {numberOfSavedMovies}
          </span>
        </div>
        <Button variant="outline" className="cursor-pointer">
          Dark
        </Button>
      </div>
    </main>
  );
}

export default Navbar;
