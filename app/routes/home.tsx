import Navbar from "~/components/ui/Navbar";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "../components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="bg-white border min-h-screen">
      <Navbar />
      <section className="flex flex-col gap-5 h-auto">
        <div className="flex flex-col items-center gap-2 pt-20">
          <h1 className="text-amber-700 text-sm font-bold tracking-widest">
            AVALABILITY IN THE UNITED STATES
          </h1>
          <h2 className="text-6xl text-center font-normal leading-18">
            Where can I watch it <br />
            tonight?
          </h2>
          <p className="text-center text-gray-500">
            One search across tweleve services. <br /> Subscription, free with
            ads, or rent - priced <br /> and grouped, no guessing.
          </p>
        </div>
        <div className="border flex flex-col items-center gap-5">
          <InputGroup className="w-160 h-15 rounded-sm">
            <InputGroupInput placeholder="Search a film or series..." />
            <InputGroupAddon>
              <SearchIcon className="text-amber-700" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                variant="outline"
                className="h-10 w-20 border-amber-700 text-amber-700 hover:bg-amber-700/8 hover:text-amber-700 cursor-pointer"
              >
                Search
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <div className="flex items-center gap-2">
            <h1>Try</h1>
            <Button variant="outline">Arrival</Button>
          </div>
        </div>
        <div className="flex border">
          <div>
            <h1>TWELVE SERVICES</h1>
            <p>
              Netflix, Disney+, Prime Video, Apple TV+, HBO Max, Hulu,
              Paramount+, Peacock, Tubi, Pluto TV, YouTube, Apple TV.
            </p>
          </div>
          <div>
            <h1>GROUPED BY COST</h1>
            <p>
              Subscription first, then free with ads, then rent or buy with
              prices in tabular figures.
            </p>
          </div>
          <div>
            <h1>KEPT ON YOUR DEVICE</h1>
            <p>The watchlist needs no account. Nothing leaves this browser.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
