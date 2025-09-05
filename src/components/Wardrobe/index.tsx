import React from "react";
import type { IClothe } from "../../types/clothe";
import ClothCard from "../ClothCard";

interface WardrobeProps {
  items: IClothe[];
}

function Wardrobe({ items }: WardrobeProps) {
  if (!items) {
    return;
  }

  return (
    <div className="w-full p-5 rounded-tl-3xl rounded-tr-3xl bg-[#F3F3F3] min-h-20">
      <div className="flex gap-3">
        {items.map((item) => (
          <ClothCard item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
}

export default Wardrobe;
