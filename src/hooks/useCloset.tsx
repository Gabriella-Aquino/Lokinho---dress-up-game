import React, { useState } from 'react'
import { shirts } from '../clothes';
import { FaTshirt } from "react-icons/fa";
import type { ICategory, IClothe } from '../types/clothe';
import { PiDressFill } from "react-icons/pi";
import { GiSkirt } from "react-icons/gi";
import HairIcon from "../../public/assets/icon/hair.svg?react"
import RingIcon from "../../public/assets/icon/ring.svg?react"
import HairItemIcon from "../../public/assets/icon/hair_item.svg?react"

export function useCloset() {
  const TABS = [
    { id: 1, icon: <HairIcon width={28} height={28}/>, value: "shirt" },
    { id: 2, icon: <HairItemIcon color="white" width={28} height={28} />, value: "shirt" },
    { id: 3, icon: <RingIcon width={28} height={28} />, value: "shirt" },
    { id: 4, icon: <PiDressFill color="white" size={28} />, value: "dress" },
    { id: 5, icon: <FaTshirt color="white" size={28} />, value: "shirt" },
    { id: 6, icon: <GiSkirt color="white" size={28} />, value: "bottom" },
  ];
  const [layers, setLayers] = useState<Partial<Record<ICategory, IClothe>>>({
    shirt: {
      id: 1,
      name: "sutiã",
      image: "/assets/bra.png",
      category: "shirt",
      imageToShow: "/assets/shirt/Shirt 3 1.png",
    },
    bottoms: {
      id: 2,
      name: "roupa de baixo",
      image: "/assets/underwear.png",
      category: "bottoms",
      imageToShow: "/assets/shirt/Shirt 3 1.png",
    },
  });

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const CLOTHES_BY_CATEGORY: Record<ICategory, IClothe[]> = {
    hat: [],
    hair: [],
    hairItems: [],
    itens: [],
    dress: [],
    shirt: shirts,
    bottoms: [],
    coat: [],
    socks: [],
    shoes: [],
  };

  return {
    TABS,
    layers, 
    activeTab,
    CLOTHES_BY_CATEGORY
  }
}
