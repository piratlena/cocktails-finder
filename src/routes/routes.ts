import HomePage from "./../pages/HomePage/HomePage";
import AllRecipies from "../pages/AllRecipies/AllRecipies";
import Random from "./../pages/Random/Random";
import Cocktail from "./../pages/Cocktail/Cocktail";
import SearchResults from "./../pages/SearchResults/SearchResults";
import List from "./../pages/List/List";
import RecepiesList from "../components/Recipe/RecepiesList";

export const navigationsRoutes = [
  { path: "/", element: HomePage },
  { path: "/search", element: SearchResults },
  { path: "/ingredients/:cocktail", element: Cocktail },
  { path: "/recipies", element: AllRecipies },
  { path: "/recipies/:searchTerm", element: RecepiesList },
  { path: "/random", element: Random },
];
