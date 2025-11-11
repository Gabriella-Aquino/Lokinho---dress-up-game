import Tabs from "./components/Tabs";
import Wardrobe from "./components/Wardrobe";
import type { ICategory } from "./types/clothe";
import Doll from "./components/doll";
import TabsCol from "./components/Tabs/tabCol";
import { useCloset } from "./hooks/useCloset";
import { useRef } from "react";
import { toPng } from "html-to-image";

function App() {
  const { TABS, CLOTHES_BY_CATEGORY, activeTab, setActiveTab, layers, handleSelectClothing } = useCloset();
  const dollRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!dollRef.current) return;

    const dataUrl = await toPng(dollRef.current, { cacheBust: true });
    const link = document.createElement("a");
    link.download = "minha-doll.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <div className="fixed inset-0 flex justify-center w-full h-full bg-background overflow-hidden">
      <header className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[2000]">
        <button
          onClick={handleDownload}
          className="bg-white/80 px-3 py-1 rounded-lg text-sm hover:bg-white shadow-md"
        >
          Baixar imagem
        </button>
      </header>
      <div className="absolute w-full left-0 bottom-0 h-80 bg-ground" />

      <Doll layers={layers} ref={dollRef}/>
      <div className="absolute right-1 top-10 z-[1000]">
        <TabsCol tabs={TABS} onTabClick={setActiveTab} activeTab={activeTab}/>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Tabs tabs={TABS} />
        <Wardrobe onClickClothing={handleSelectClothing} items={CLOTHES_BY_CATEGORY[activeTab.value as ICategory]} />
      </div>
    </div>
  );
}

export default App;
