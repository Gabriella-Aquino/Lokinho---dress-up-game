import { cn } from "../../lib/utils";
import type { IClothe } from "../../types/clothe";
import { Shape } from "./variants";

type ShapeVariants = keyof typeof Shape 

interface ClothCardProps {
  item: IClothe
  shape?: ShapeVariants;
}

function ClothCard({ item, shape='square'}:ClothCardProps) {
  return <div className={cn(["w-16 min-w-16 border-2 border-primary rounded-2xl", Shape[shape], item.select && 'border-4'])}>
    <img className="w-full" src={item.imageToShow} alt={item.name} />
  </div>;
}

export default ClothCard;
