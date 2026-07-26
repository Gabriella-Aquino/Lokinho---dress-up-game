import DesktopLayout from "./components/layouts/DesktopLayout";
import MobileLayout from "./components/layouts/MobileLayout";
import { useCloset } from "./hooks/useCloset";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const {
    tabs,
    clothesByCategory,
    activeTab,
    setActiveTab,
    layers,
    handleSelectClothing,
  } = useCloset();
  const activeItems = clothesByCategory[activeTab.value];
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <main className="fixed inset-0 overflow-hidden bg-background">
      {isDesktop ? (
        <DesktopLayout
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          layers={layers}
          items={activeItems}
          onSelectClothing={handleSelectClothing}
        />
      ) : (
        <MobileLayout
          tabs={tabs}
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
