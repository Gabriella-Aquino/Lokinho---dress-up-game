import type { ICategory, IClothing } from "../../types/clothe";
import { CLOTHES_ORDER } from "../../clothesOrder";
import { cn } from "../../lib/utils";

interface DollProps {
  layers: Partial<Record<ICategory, IClothing | undefined>>;
}

function Doll({ layers }: DollProps) {
  return (
    <div className="relative aspect-[3/4] h-[58vh] max-h-[520px] md:h-full md:max-h-none">
      <div className="absolute top-0 left-0 w-full h-full ">
        <img src="/assets/doll.png" alt="boneca" className="w-full h-auto" />
        {Object.entries(layers).map(([category, clothe]) => {
          if (!clothe) return null;

          const ZIndex =
            clothe.customIndex ?? CLOTHES_ORDER[category as ICategory];

          return (
            <img
              key={`${category}-${clothe.id}`}
              src={clothe.image}
              className={cn([
                "absolute top-0 left-0 w-full h-auto"
              ])}
              style={{ zIndex: ZIndex }}
              alt={clothe.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Doll;
