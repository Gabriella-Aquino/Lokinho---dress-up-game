import React, { useState } from 'react'
import { shirts } from '../clothes';
import { FaTshirt } from "react-icons/fa";
import type { ICategory, IClothe } from '../types/clothe';
import Tabs from '../components/Tabs';


export function useCloset() {
  const TABS = [
    { id: 1, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
    { id: 2, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
    { id: 3, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
    { id: 4, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
    { id: 5, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
    { id: 6, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
    { id: 7, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
    { id: 8, icon: <FaTshirt color="white" size={30} />, value: "shirt" },
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
