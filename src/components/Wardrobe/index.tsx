import type { IClothing } from "../../types/clothe";
import ClothCard from "../ClothCard";

interface WardrobeProps {
  items: IClothing[];
  onClickClothing: (clothing: IClothing) => void;
}


function Wardrobe({ items, onClickClothing }: WardrobeProps) {
  if (!items) {
    return null;
  }

  return (
    <div className="flex w-full justify-center overflow-y-auto rounded-tl-3xl rounded-tr-3xl bg-[#F3F3F3] p-3 max-h-36 md:h-full md:max-h-none md:justify-start md:rounded-none md:p-0">
      <div className="grid h-min grid-cols-4 gap-2 md:w-full md:grid-cols-3 md:gap-3">
        {items.map((item) => (
          <ClothCard
            item={item}
            key={item.id}
            onClick={() => onClickClothing(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Wardrobe;
