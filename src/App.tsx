import ClothCard from "./components/ClothCard";
import { FaTshirt } from "react-icons/fa";
import Tabs from "./components/Tabs";
import Wardrobe from "./components/Wardrobe";
import type { IClothe } from "./types/clothe";

function App() {
  const CLOTHES: IClothe[] = [
    {
      id: 1,
      name: "void",
      category: "shirt",
      image: "/assets/shirt/Shirt 3.png",
      imageToShow: "/assets/icon/block.svg",
    },
    {
      id: 2,
      name: "camisa simples rosa",
      category: "shirt",
      image: "/assets/shirt/Shirt 3.png",
      imageToShow: "/assets/shirt/Shirt 3 1.png",
    },
    {
      id: 3,
      name: "camisa simples rosa",
      category: "shirt",
      image: "/assets/shirt/Shirt 3.png",
      imageToShow: "/assets/shirt/Shirt 3 1.png",
      select: true,
    },
  ];

  const TABS = [
    { id:1 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
    { id:2 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
    { id:3 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
    { id:4 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
    { id:5 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
    { id:6 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
    { id:7 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
    { id:8 , icon: <FaTshirt color="white" size={30}/>, value: "shirt" },
  ];

  return (
    <div className="relative w-full h-full bg-background">
      <div className="absolute w-full left-0 bottom-0 h-80 bg-ground" />
      <div className="absolute bottom-0 left-0 w-full">
        <Tabs tabs={TABS} />
        <Wardrobe items={CLOTHES} />
      </div>
    </div>
  );
}

export default App;
