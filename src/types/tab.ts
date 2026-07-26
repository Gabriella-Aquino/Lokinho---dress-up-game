import type { JSX } from "react";
import type { ICategory } from "./clothing";

export interface ITab {
  id: number;
  icon: JSX.Element;
  value: ICategory | "";
}

export interface ITabsProps {
  tabs: ITab[];
  activeTab: ITab;
  onTabClick: (tab: ITab) => void;
}
