const TMDB_BASE_URL = "https://api.themoviedb.org/3";

async function tmdbFetch(path: string) {
  const res = await fetch(`${TMDB_BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`TMDB request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export function searchMovies(query: string) {
  return tmdbFetch(`/search/movie?query=${encodeURIComponent(query)}`);
}

export function getPopularMovies() {
  return tmdbFetch(`/movie/popular`);
}

export function searchMultiple(query: string) {
  return tmdbFetch(`/search/multi?query=${encodeURIComponent(query)}`);
}

export function getWatchProviders(id: number, mediaType: "movie" | "tv") {
  return tmdbFetch(`/${mediaType}/${id}/watch/providers`);
}

export function getMovieDetails(id: number) {
  return tmdbFetch(`/movie/${id}`);
}

