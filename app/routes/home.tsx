import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Where to Watch" },
    { name: "description", content: "Find out where to stream, rent, or buy any movie or show." },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bg px-6 py-16">
      <h1 className="text-h1 text-text">Where to Watch</h1>
      <p className="text-body text-text-muted mt-2">
        Search a title and see every service it's on.
      </p>

      <div className="mt-8 max-w-sm rounded-lg border border-divider bg-surface p-4">
        <h2 className="text-h4 text-text">Dune: Part Two</h2>
        <p className="text-small text-text-muted tnum mt-1">Film · 2016 · 1h 56m</p>
        <div className="mt-3 flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--color-netflix)" }}
          />
          <span className="text-small text-text">Streaming on Netflix</span>
        </div>
      </div>
    </main>
  );
}
