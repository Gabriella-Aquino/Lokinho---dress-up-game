// types.ts
export type ICategory =
  | "hat"
  | "hair"
  | "items"
  | "dress"
  | "shirt"
  | "bottoms"
  | "coat"
  | "socks"
  | "shoes";

declare interface IClothing {
  id: number;
  name: string;
  image: string;
  category: ICategory;
  customIndex?: number;
  imageToShow: string;
  select?: boolean;
}
