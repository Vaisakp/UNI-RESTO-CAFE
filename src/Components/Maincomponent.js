import React, { useEffect, useState } from "react";
import FoodCategory from "./FoodCategory";
import { data } from "../data";
import Navbar from "./Navbar";

const Maincomponent = () => {
  const [categories, setcategories] = useState([]);
  const [Items, setItems] = useState([]);
  const [itemsincart, setitemsincart] = useState(0);
  const [currentCategory, setcurrentCategory] = useState("");

  const changeitemsincart = (type) => {
    if (type === "increment") {
      setitemsincart((prev) => prev + 1);
    } else {
      setitemsincart((prev) => prev - 1);
    }
  };

  const getData = () => {
    setcategories(data[0].table_menu_list);
  };
  const changeItems = (category) => {
    const filteredData = categories.filter(
      (item) => item.menu_category === category
    );
    setItems(filteredData[0].category_dishes);
    setcurrentCategory(category);
  };
  useEffect(() => {
    getData();
    if (categories) {
      const initialcategory = categories[0];
      if (initialcategory) {
        changeItems(initialcategory.menu_category);
      }
    }
  }, [categories]);

  return (
    <div className="mt-4">
      <Navbar itemsincart={itemsincart} />
      <div className="flex mt-4 justify-center flex-col overflow-x-scroll">
        <div
          className=" border-b flex 
        border-gray-400"
        >
          {categories &&
            categories.map((item) => {
              return (
                <button
                  key={item.menu_category}
                  className={
                    item.menu_category === currentCategory
                      ? "text-red-500 p-4 border-b  border-red-500 max-w-xl w-64 px-2  font-medium text-lg"
                      : "text-gray-500 p-4 border-b border-gray-500 max-w-xl w-64 px-2 hover:text-red-500 hover:border-red-500 transition-all duration-300 ease-in-out font-medium text-lg"
                  }
                  onClick={() => {
                    changeItems(item.menu_category);
                  }}
                >
                  {item.menu_category}
                </button>
              );
            })}
        </div>
        {Items &&
          Items.map((item) => {
            return (
              <div
                className="mt-4 p-4 border-b 
                         border-gray-400"
                key={item.dish_id}
              >
                <FoodCategory
                  itemData={item}
                  changeitemsincart={changeitemsincart}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Maincomponent;
