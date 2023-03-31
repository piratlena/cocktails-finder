import HomePage from "./../pages/HomePage/HomePage";
import AllRecipies from "../pages/AllRecipies/AllRecipies";
import Random from "./../pages/Random/Random";
import Cocktail from "./../pages/Cocktail/Cocktail";
import SearchResults from "./../pages/SearchResults/SearchResults";
import List from "./../pages/List/List";

export const navigationsRoutes = [
  { path: "/", element: HomePage },
  { path: "/search", element: SearchResults },
  { path: "/:cocktail", element: Cocktail },
  { path: "/recipies", element: AllRecipies },
  { path: "/random", element: Random },
  { path: "/", element: List },
];
