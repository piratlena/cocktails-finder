export interface IFilterSlice {
  name: string;
  drink: string;
  glass: string;
  alcohol: string;
  type?: string;
  value?: any;
  query: string;
  isLoading: boolean;
}

export enum Filters {
  TYPE_OF_GLASS = "Type of glass",
  TYPE_OF_DRINK = "Species",
  ALCOHOL = "Alcoholic or non alcoholic",
}
