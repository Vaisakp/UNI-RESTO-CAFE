import React, { useState } from "react";

const FoodCategory = ({ itemData, changeitemsincart }) => {
  const [itemQty, setitemQty] = useState(0);
  const changeQty = (type) => {
    if (type === "increment") {
      setitemQty((prev) => prev + 1);
      changeitemsincart("increment");
    } else if (itemQty === 0) {
    } else {
      setitemQty((prev) => prev - 1);
      changeitemsincart("decrement");
    }
  };
  return (
    <div className="flex items-center justify-between">
      <div className=" flex  ">
        <div
          className={
            itemData.dish_Availability
              ? "border border-green-500 mr-4 p-1 h-6 w-6 flex items-center justify-center   "
              : "border border-red-500 mr-4 p-1 h-6 w-6 flex items-center justify-center   "
          }
        >
          <div
            className={
              itemData.dish_Availability
                ? "bg-green-500 w-4 h-4 rounded-full "
                : "bg-red-500 w-4 h-4 rounded-full "
            }
          ></div>
        </div>

        <div>
          <div className="flex">
            <h1 className="font-semibold ">{itemData.dish_name}</h1>
          </div>

          <p className="font-medium my-2 ">
            {itemData.dish_currency} {itemData.dish_price}
          </p>
          <p className="text-gray-400 w-60 lg:text-base text-sm lg:w-102 ">
            {itemData.dish_description}
          </p>

          <div className="bg-green-500 py-1 w-32 mt-4 rounded-3xl flex items-center justify-center text-white">
            <button
              className="font-bold px-4"
              onClick={() => {
                changeQty("decrement");
              }}
            >
              -
            </button>
            <p className=" px-4">{itemQty}</p>
            <button
              className="font-bold px-4"
              onClick={() => {
                changeQty("increment");
              }}
            >
              +
            </button>
          </div>

          {itemData.addonCat.length > 0 && (
            <p className="mt-2 text-red-500">Customization Available</p>
          )}
          {itemData.dish_Availability || (
            <p className="mt-2 text-red-500">Not Available</p>
          )}
        </div>
      </div>

      <div className="flex lg:items-center flex-col lg:flex-row ">
        <p className="lg:font-semibold font-medium text-sm w-full mt-2 lg:mt-0 mr-8  order-1">
          {itemData.dish_calories} calories
        </p>
        <img
          className=" w-20 h-20 lg:w-24 lg:h-28 object-cover rounded-md lg:order-1 "
          src={itemData.dish_image}
          alt="imagesd"
        />
      </div>
    </div>
  );
};

export default FoodCategory;
