export const TYPE_OF_GLASS = "Type of glass";
export const TYPE_OF_DRINK = "Species";
export const ALCOHOL = "Alcoholic or non alcoholic";

export const FILTEROPTIONS = {
  TYPE_OF_GLASS: ["Glass", "Flute"],
  TYPE_OF_DRINK: ["Ordinary drink", "Cocktail"],
  ALCOHOL: ["alcoholic", "non alcoholic"],
};

export const filterList = [
  {
    id: 1,
    name: "Type of glass",
    list: ["Glass", "Flute"],
    property: ["g=Cocktail_glass", "g=Champagne_flute"],
  },
  {
    id: 2,
    name: "Type of drink",
    list: ["Ordinary drink", "Cocktail"],
    property: ["c=Ordinary_Drink", "c=Cocktail"],
  },
  {
    id: 3,
    name: "Alcoholic or non alcoholic",
    list: ["Alcoholic", "Non_Alcoholic"],
    property: ["a=Alcoholic", "a=Non_Alcoholic"],
  },
];
