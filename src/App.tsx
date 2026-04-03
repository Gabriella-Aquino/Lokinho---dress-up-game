import DesktopLayout from "./components/layouts/DesktopLayout";
import MobileLayout from "./components/layouts/MobileLayout";
import type { ICategory } from "./types/clothe";
import { useCloset } from "./hooks/useCloset";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const {
    TABS,
    CLOTHES_BY_CATEGORY,
    activeTab,
    setActiveTab,
    layers,
    handleSelectClothing,
  } = useCloset();
  const activeItems = CLOTHES_BY_CATEGORY[activeTab.value as ICategory];
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <main className="fixed inset-0 overflow-hidden bg-background">
      {isDesktop ? (
        <DesktopLayout
          tabs={TABS}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          layers={layers}
          items={activeItems}
          onSelectClothing={handleSelectClothing}
        />
      ) : (
        <MobileLayout
          tabs={TABS}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          layers={layers}
          items={activeItems}
          onSelectClothing={handleSelectClothing}
        />
      )}
    </main>
  );
}

export default App;
