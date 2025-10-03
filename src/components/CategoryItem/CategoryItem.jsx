import React from "react";
import "./CategoryItem.css";

function CategoryItem({ itemName }) {
  return (
    <>
      <div
        id="category-item"
        className="category-item text-[1rem] sm:text-md md:text-lg lg:text-xl xl:text-2xl"
      >
        <a id="href" href="productList.html">
          {itemName}
        </a>
      </div>
    </>
  );
}

export default CategoryItem;
