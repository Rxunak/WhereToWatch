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
    <main className="bg-white">
      <Navbar />
      <section>
        <div>
          <h1>AVALABILITY IN THE UNITED STATES</h1>
          <h2>Where can I watch it tonight?</h2>
          <p>
            One search across tweleve services. Subscription, free with ads, or
            rent - priced and grouped, no guessing.
          </p>
        </div>
        <div>
          <InputGroup className="w-70">
            <InputGroupInput placeholder="Search a film or series..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="secondary">Search</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <div>
            <h1>Try</h1>
            <Button variant="outline">Arrival</Button>
          </div>
        </div>
        <div className="flex">
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
