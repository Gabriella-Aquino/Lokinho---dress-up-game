import React, { useEffect, useState } from "react";
import {
  bottom,
  coat,
  dress,
  hair,
  hat,
  items,
  shirt,
  shoes,
  socks,
} from "../clothes";
import { FaTshirt } from "react-icons/fa";
import type { ICategory, IClothing } from "../types/clothe";
import { PiDressFill } from "react-icons/pi";
import { GiSkirt } from "react-icons/gi";
import HairIcon from "../../public/assets/icon/hair.svg?react";
import RingIcon from "../../public/assets/icon/ring.svg?react";
import HairItemIcon from "../../public/assets/icon/hair_item.svg?react";
import CoatIcon from "../../public/assets/icon/coat.svg?react";
import ShoesIcon from "../../public/assets/icon/shoes.svg?react";
import SockIcon from "../../public/assets/icon/sock.svg?react";
import type { ITab } from "../types/tab";

export function useCloset() {
  const TABS: ITab[] = [
    { id: 1, icon: <HairIcon width={28} height={28} className="scale-z-150"/>, value: "hair" },
    {
      id: 2,
      icon: <HairItemIcon color="white" width={28} height={28} />,
      value: "hat",
    },
    { id: 3, icon: <RingIcon width={28} height={28} />, value: "" },
    { id: 4, icon: <PiDressFill color="white" size={28} />, value: "dress" },
    { id: 5, icon: <FaTshirt color="white" size={28} />, value: "shirt" },
    { id: 6, icon: <GiSkirt color="white" size={28} />, value: "bottoms" },
    { id: 7, icon: <CoatIcon color="white" />, value: "coat" },
    {
      id: 8,
      icon: <ShoesIcon fill="white" width={28} height={28} />,
      value: "coat",
    },
    { id: 9, icon: <SockIcon width={28} height={28} />, value: "socks" },
  ];
  const [layers, setLayers] = useState<Partial<Record<ICategory, IClothing>>>({
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

  const handleSelectClothing = (clothing: IClothing) => {
    setLayers((prev) => ({ ...prev, [clothing.category]: clothing }));
  };

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const CLOTHES_BY_CATEGORY: Record<ICategory, IClothing[]> = {
    hat: hat,
    hair: hair,
    items: items,
    dress: dress,
    shirt: shirt,
    bottoms: bottom,
    coat: coat,
    socks: socks,
    shoes: shoes,
  };

  useEffect(() => {
    console.log("Layers atuais:", layers);
  }, [layers]);

  return {
    TABS,
    layers,
    activeTab,
    setActiveTab,
    CLOTHES_BY_CATEGORY,
    setLayers,
    handleSelectClothing,
  };
}
