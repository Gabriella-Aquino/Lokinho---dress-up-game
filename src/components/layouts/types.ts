import type { ICategory } from "../../types/clothing";
import type { ITab } from "../../types/tab";
import type { useCloset } from "../../hooks/useCloset";

type ClosetState = ReturnType<typeof useCloset>;

export interface ClosetLayoutProps {
  tabs: ITab[];
  activeTab: ITab;
  onTabClick: ClosetState["setActiveTab"];
  layers: ClosetState["layers"];
  items: ClosetState["clothesByCategory"][ICategory];
  onSelectClothing: ClosetState["handleSelectClothing"];
}
