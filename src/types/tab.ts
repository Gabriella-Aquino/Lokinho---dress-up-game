import type { JSX } from "react";
import type { ICategory } from "./clothing";

export interface ITab {
  id: number;
  icon: JSX.Element;
  value: ICategory | "";
}
