import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface TabsProps {
  tabs: { id: number; icon: string | React.ReactNode; value: string }[];
  itemsPerPage?: number;
}

function TabsCol({ tabs, itemsPerPage = 5 }: TabsProps) {
  const [page, setPage] = useState(0);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleTabs = tabs.slice(start, end);

  const canGoBack = page > 0;
  const canGoForward = end < tabs.length;

  return (
    <div className="flex flex-col items-center w-min gap-3 z-50 md:hidden">
      <button
        disabled={!canGoBack}
        onClick={() => setPage((p) => p - 1)}
        className={cn(
          "p-1 rounded-full bg-primary hover:bg-accent text-white",
          !canGoBack && "opacity-0 cursor-default"
        )}
      >
        <IoIosArrowUp size={24}/>
      </button>

      <div className="flex flex-col gap-3 items-center">
        {visibleTabs.map((tab) => (
          <div
            key={tab.id}
            className="py-1.5 px-1.5 rounded-full bg-primary cursor-pointer flex items-center justify-center hover:bg-accent transition-colors"
            onClick={() => console.log(tab.id)}
          >
            {typeof tab.icon === "string" ? (
              <img
                src={tab.icon}
                alt={tab.value}
                className="w-[28px] h-[28px]"
              />
            ) : (
              tab.icon
            )}
          </div>
        ))}
      </div>

      <button
        disabled={!canGoForward}
        onClick={() => setPage((p) => p + 1)}
        className={cn(
          "p-1 rounded-full bg-primary hover:bg-accent text-white",
          !canGoForward && "opacity-0 cursor-default "
        )}
      >
        <IoIosArrowDown size={24}/>
      </button>
    </div>
  );
}

export default TabsCol;
