import { cn } from "../../lib/utils";
import type { IClothing } from "../../types/clothe";
import { Shape } from "./variants";

type ShapeVariants = keyof typeof Shape;

interface ClothCardProps {
  item: IClothing;
  shape?: ShapeVariants;
  onClick: () => void
}

function ClothCard({ item, shape = "square", onClick }: ClothCardProps) {
  return (
    <div
      className={cn([
        "w-16 min-w-16 border-2 border-primary rounded-2xl",
        Shape[shape],
        item.select && "border-4",
      ])}
      onClick={onClick}
    >
      <img className="w-full" src={item.imageToShow} alt={item.name} />
    </div>
  );
}

export default ClothCard;
