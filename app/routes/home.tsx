import { Button } from "~/components/ui/button";
import {
  homepageTryOptions,
  homepageFeatures,
} from "./constants/homeConstants";
import { useNavigate } from "react-router";
import SearchInput from "~/components/shared/SearchInput";

export default function Home() {
  let navigate = useNavigate();

  return (
    <main className="bg-white border min-h-screen">
      <section className="flex flex-col gap-8 h-auto">
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
        <div className="flex flex-col items-center gap-5 mb-8">
          <SearchInput className="w-160 h-15 rounded-sm pl-2 pr-2" />
          <div className="flex items-center gap-2">
            <h1>Try</h1>
            {homepageTryOptions.map((title) => (
              <Button
                key={title}
                variant="outline"
                className="cursor-pointer"
                onClick={() => navigate(`/search?q=${title}`)}
              >
                {title}
              </Button>
            ))}
          </div>
        </div>
        <div className="p-1 w-full flex justify-center">
          <div className="flex justify-between border-t-2 w-250">
            {homepageFeatures.map((feature, index) => (
              <div key={index} className="w-80 flex flex-col gap-1 mt-4">
                <h1 className="font-bold text-sm">{feature.title}</h1>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
