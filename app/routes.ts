import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("search", "routes/search.tsx"),
  route("movie", "routes/movie.tsx"),
  route("watchList", "routes/watchList.tsx")
] satisfies RouteConfig;
