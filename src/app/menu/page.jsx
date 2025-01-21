import MenuGrid from "@/components/menuGrid";
import { Toaster } from "react-hot-toast";
import menuItems from "@/data/menuItems";
import Modal from "@/components/modal";

export default function Menu() {
  return (
    <div className="p-4 container mx-auto flex flex-col m-2 ">
      <div className="flex items-baseline lg:items-center justify-between">
        <h1 className="text-4xl font-bold mb-2 text-stone-800">Menu</h1>
        <Modal />
      </div>
      <MenuGrid menuItems={menuItems} />
      <p className="text-xs text-stone-300 text-center mb-6 border-t pt-4">
        Order By Yourself&trade; - All rights reserved 2025
      </p>
      <Toaster position="bottom-right" />
    </div>
  );
}
