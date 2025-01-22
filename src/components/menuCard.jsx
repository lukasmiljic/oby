"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { toast } from "react-hot-toast";

export default function MenuCard({ name, price, image, desc }) {
  const [orderCount, setOrderCount] = useState(0);

  function incrementOrderCount() {
    setOrderCount(orderCount + 1);
    toast.success(`${name} added to order!`);
  }
  function decrementOrderCount() {
    console.log(orderCount);
    if (orderCount !== 0) {
      setOrderCount(orderCount - 1);
      toast.error(`${name} removed from order!`);
    }
  }

  return (
    <div
      onClick={incrementOrderCount}
      className={`flex flex-row sm:flex-col border ${
        orderCount > 0 ? "border-blue-500 bg-blue-50" : "border-stone-200"
      } p-2 rounded-sm cursor-pointer hover:-transtone-y-1 transform transition duration-300 ease-in-out hover:shadow-lg sm:animate-appear "`}>
      <div className="flex-1 sm:flex-none mr-3 justify-center self-center">
        <Image
          src={image}
          width={100}
          height={100}
          alt={name}
          className="mb-3 h-35 sm:h-40 bg-stone-100 w-full rounded-sm object-cover"
        />
      </div>

      <div className="flex-[2] flex flex-col">
        <div className="flex items-center justify-between">
          <p className="font-bold text-stone-700">{name}</p>
          <p className="text-sm text-stone-700">{price} &euro;</p>
        </div>
        <p className="max-h-24 text-xs text-stone-400 pb-2 text-elipsis overflow-hidden ...">
          {desc}
        </p>
        <div className="flex items-center justify-end gap-4 mt-auto text-stone-500 select-none">
          <FiMinus
            className={`${
              orderCount === 0
                ? "text-stone-300 cursor-default"
                : "cursor-pointer"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              decrementOrderCount();
            }}
          />
          <p className=" text-xs font-semibold">{orderCount}</p>
          <FiPlus
            className="inline"
            onClick={(e) => {
              e.stopPropagation();
              incrementOrderCount();
            }}
          />
        </div>
      </div>
    </div>
  );
}
