import { cn } from "../../lib/utils";
import type { IClothing } from "../../types/clothe";
import { Shape } from "./variants";

type ShapeVariants = keyof typeof Shape;

interface ClothCardProps {
  item: IClothing;
  shape?: ShapeVariants;
  onClick: () => void;
}

function ClothCard({ item, shape = "square", onClick }: ClothCardProps) {
  return (
    <button
      type="button"
      className={cn([
        "w-16 min-w-16 max-w-16 border-2 flex items-center justify-center border-primary rounded-2xl",
        Shape[shape],
        item.select && "border-4",
      ])}
      onClick={onClick}
      aria-label={`Vestir ${item.name}`}
    >
      <img
        className="w-14 h-14 object-contain"
        src={item.imageToShow}
        alt={item.name}
      />
    </button>
  );
}

export default ClothCard;
