// types.ts
export type ICategory =
  | "hat"
  | "hair"
  | "hairItems"
  | "itens"
  | "dress"
  | "shirt"
  | "bottoms"
  | "coat"
  | "socks"
  | "shoes";

declare interface IClothe {
  id: number;
  name: string;
  image: string;
  category: ICategory;
  customIndex?: number;
  imageToShow: string;
  select?: boolean
}
