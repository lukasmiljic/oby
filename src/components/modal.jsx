"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegFaceSadTear } from "react-icons/fa6";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const order = [
    {
      id: 8,
      name: "Iced Tea",
      price: "2.50",
      image: "/menuItems/tea.jpg",
      desc: "Iced tea is a cold tea beverage usually served in a glass with ice. It may or may not be sweetened.",
      category: "cold drinks",
      count: 1,
    },
    {
      id: 9,
      name: "Milkshake",
      price: "4.00",
      image: "/menuItems/milkshake.png",
      desc: "A milkshake is a sweet, cold beverage that is usually made from milk, ice cream, or iced milk, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate sauce, or fruit syrup.",
      category: "cold drinks",
      count: 2,
    },
  ];
  console.log(order.count);

  return (
    <>
      <p
        onClick={toggleModal}
        className="text-sm underline text-blue-500 hover:text-blue-400 cursor-pointer select-none transition-colors">
        view order
      </p>

      <div
        className={`fixed z-10 top-0 bottom-0 left-0 right-0 bg-stone-700 bg-opacity-5 backdrop-blur-sm transition-opacity ease-in-out duration-300 ${
          modalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleModal}></div>

      <div
        className={`mx-2 fixed z-20 top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
          modalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity duration-300`}>
        <div
          className={`flex flex-col mx-auto w-full sm:max-w-md bg-white z-20 p-6 border-stone-200 border rounded-md shadow-lg transform transition-all ease-in-out duration-300 ${
            modalOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
          <div className="flex flex-row justify-between items-center text-stone-500 mb-4">
            <h1 className="">Order</h1>
            <IoMdClose
              onClick={toggleModal}
              className="inline cursor-pointer hover:text-red-500 transition-colors"
            />
          </div>

          {order.length !== 0 ? (
            <table className="table-auto w-full text-sm text-stone-600">
              <thead>
                <tr className="text-stone-500">
                  <th className="text-left text-xs uppercase py-2">Name</th>
                  <th className="text-right text-xs uppercase">Price</th>
                  <th className="text-right text-xs uppercase">Quantity</th>
                  <th className="text-right text-xs uppercase">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.map((item, i) => (
                  <tr
                    key={item.id}
                    className={`${i !== order.count - 1 && "border-b"}`}>
                    <td className="text-left font-semibold ">{item.name}</td>
                    <td className="text-right">{item.price} &euro;</td>
                    <td className="text-right">x{item.count}</td>
                    <td className="text-right py-2">
                      {item.price * item.count} &euro;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <>
              <FaRegFaceSadTear className="text-5xl text-stone-300 mx-auto" />
              <p className="text-stone-400 text-center">
                You haven't ordered anything yet!
              </p>
            </>
          )}

          <button className="text-sm mt-4 py-3 px-6 bg-stone-200 hover:bg-stone-300 transition-colors text-stone-500 rounded-md mx-auto">
            Place order{" "}
            {order.reduce((acc, item) => acc + item.price * item.count, 0)}{" "}
            &euro;
          </button>
        </div>
      </div>
    </>
  );
}
