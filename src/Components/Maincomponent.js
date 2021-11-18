import React, { useEffect, useState } from "react";
import FoodCategory from "./FoodCategory";
import axios from "axios";
import Navbar from "./Navbar";

const Maincomponent = () => {
  const [categories, setcategories] = useState("");
  const [Items, setItems] = useState([]);
  const [itemsincart, setitemsincart] = useState(0);
  const [currentCategory, setcurrentCategory] = useState("");
  const [initialrender, setinitialrender] = useState(true);

  const changeitemsincart = (type) => {
    if (type === "increment") {
      setitemsincart((prev) => prev + 1);
    } else {
      setitemsincart((prev) => prev - 1);
    }
  };

  const getData = () => {
    axios
      .get("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
      .then((response) => {
        const apidata = response.data[0];
        setcategories(apidata.table_menu_list);
      });
  };
  const changeItems = (category) => {
    const filteredData = categories.filter(
      (item) => item.menu_category === category
    );
    setItems(filteredData[0].category_dishes);
    setcurrentCategory(category);
  };
  if (categories) {
    if (initialrender) {
      changeItems(categories[0].menu_category);
      setinitialrender(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-4">
      <Navbar itemsincart={itemsincart} />
      <div className=" mt-4 justify-center  ">
        <div
          className=" border-b flex  
        border-gray-400 w-screen overflow-x-scroll "
        >
          {categories &&
            categories.map((item) => {
              return (
                <button
                  key={item.menu_category}
                  className={
                    item.menu_category === currentCategory
                      ? "px-4 m-2 min-w-max  text-red-500 text-sm  border-red-500  lg:w-64 lg:px-2 hover:text-red-500 hover:border-red-500 transition-all duration-300 ease-in-out font-medium lg:text-lg"
                      : "px-4 m-2 min-w-max  text-gray-500 text-sm  border-gray-500  lg:w-64 lg:px-2 hover:text-red-500 hover:border-red-500 transition-all duration-300 ease-in-out font-medium lg:text-lg"
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

        <div>
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
    </div>
  );
};

export default Maincomponent;
