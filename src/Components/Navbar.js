import React from "react";
import { ShoppingCart } from "react-feather";

const Navbar = ({ itemsincart }) => {
  return (
    <div className="flex  justify-between p-4">
      <div>
        <h1 className="text-gray-500 text-xl font-medium">UNI Resto Cafe</h1>
      </div>
      <div className="flex mr-4">
        <p className="mr-4 text-gray-500">My Orders</p>
        <div className="text-gray-500 relative">
          <h2 className="absolute -top-4 -right-2 z-50 px-1 bg-red-500 rounded-full  text-white font-semibold ">
            {itemsincart}
          </h2>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
