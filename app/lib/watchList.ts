export type SavedMovie = {
  id: number;
  title: string;
  mediaType: string;
  releaseDate: string;
  imageSrc: string;
};

const WATCHLIST_KEY = "MovieCardDetails";

function isSameMovie(a: SavedMovie, b: SavedMovie) {
  return a.title === b.title && a.mediaType === b.mediaType;
}

export function getSavedMovies(): SavedMovie[] {
  const stored = localStorage.getItem(WATCHLIST_KEY);
  if (!stored) return [];
  const parsed = JSON.parse(stored);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function saveMovies(movies: SavedMovie[]) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(movies));
}

export function isInWatchlist(movie: SavedMovie): boolean {
  return getSavedMovies().some((saved) => isSameMovie(saved, movie));
}

export function toggleWatchlist(movie: SavedMovie): boolean {
  const saved = getSavedMovies();
  const alreadySaved = saved.some((m) => isSameMovie(m, movie));

  const next = alreadySaved
    ? saved.filter((m) => !isSameMovie(m, movie))
    : [...saved, movie];

  saveMovies(next);
  return !alreadySaved;
}
