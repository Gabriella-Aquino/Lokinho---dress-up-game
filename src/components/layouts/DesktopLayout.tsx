import Tabs from "../Tabs";
import Wardrobe from "../Wardrobe";
import Doll from "../doll";
import type { ClosetLayoutProps } from "./types";

function DesktopLayout({
  tabs,
  activeTab,
  onTabClick,
  layers,
  items,
  onSelectClothing,
}: ClosetLayoutProps) {
  return (
    <section className="relative mx-auto mt-4 grid h-[78vh] max-h-[620px] min-h-[520px] w-[92vw] max-w-5xl grid-cols-[1.15fr_0.85fr] items-stretch border-b-[18px] border-ground">
      <div className="absolute inset-y-0 left-0 w-[57.5%] bg-background" />
      <div className="absolute bottom-0 left-0 h-[30%] w-[57.5%] bg-ground" />

      <div className="relative z-10 flex h-full justify-center px-8 pb-8 pt-6">
        <Doll layers={layers} />
      </div>

      <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-tl-3xl border-2 border-primary bg-[#F3F3F3]">
        <div className="border-b border-primary/40 px-3 py-3">
          <Tabs tabs={tabs} activeTab={activeTab} onTabClick={onTabClick} />
        </div>
        <div className="min-h-0 flex-1 p-3 pt-4">
          <Wardrobe onClickClothing={onSelectClothing} items={items} />
        </div>
      </aside>
    </section>
  );
}

export default DesktopLayout;
