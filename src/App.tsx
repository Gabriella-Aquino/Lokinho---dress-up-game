import Tabs from "./components/Tabs";
import Wardrobe from "./components/Wardrobe";
import type { ICategory } from "./types/clothe";
import Doll from "./components/doll";
import TabsCol from "./components/Tabs/tabCol";
import { useCloset } from "./hooks/useCloset";

function App() {
  const { TABS, CLOTHES_BY_CATEGORY, activeTab, setActiveTab, layers } = useCloset();

  return (
    <div className="fixed inset-0 flex justify-center w-full h-full bg-background overflow-hidden">
      <div className="absolute w-full left-0 bottom-0 h-80 bg-ground" />

      <Doll layers={layers} />
      <div className="absolute right-1 top-10">
        <TabsCol tabs={TABS} onTabClick={setActiveTab} activeTab={activeTab}/>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Tabs tabs={TABS} />
        <Wardrobe items={CLOTHES_BY_CATEGORY[activeTab.value as ICategory]} />
      </div>
    </div>
  );
}

export default App;
