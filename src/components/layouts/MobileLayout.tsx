import Wardrobe from "../Wardrobe";
import Doll from "../doll";
import TabsCol from "../Tabs/tabCol";
import type { ClosetLayoutProps } from "./types";

function MobileLayout({
  tabs,
  activeTab,
  onTabClick,
  layers,
  items,
  onSelectClothing,
}: ClosetLayoutProps) {
  return (
    <>
      <div className="absolute bottom-0 left-0 h-80 w-full bg-ground" />

      <section className="relative flex h-full w-full justify-center">
        <div className="relative z-10 flex h-full w-full justify-center">
          <Doll layers={layers} />
        </div>
      </section>

      <div className="absolute right-1 top-10 z-[1000]">
        <TabsCol tabs={tabs} onTabClick={onTabClick} activeTab={activeTab} />
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <Wardrobe onClickClothing={onSelectClothing} items={items} />
      </div>
    </>
  );
}

export default MobileLayout;
