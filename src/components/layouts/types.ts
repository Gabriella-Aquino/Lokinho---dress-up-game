import type { ICategory } from "../../types/clothe";
import type { ITab } from "../../types/tab";
import type { useCloset } from "../../hooks/useCloset";

type ClosetState = ReturnType<typeof useCloset>;

export interface ClosetLayoutProps {
  tabs: ITab[];
  activeTab: ITab;
  onTabClick: ClosetState["setActiveTab"];
  layers: ClosetState["layers"];
  items: ClosetState["CLOTHES_BY_CATEGORY"][ICategory];
  onSelectClothing: ClosetState["handleSelectClothing"];
}
