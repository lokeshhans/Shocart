import React from "react";

function FilterProduct() {
  return (
    <>
      <div className="product-list-sidebar flex items-center flex-col gap-2">
        <div className="product-list-search">Search products</div>
        <div className="product-list-search-items">
          <input
            type="search"
            className="border-1 rounded"
            placeholder="search Products...    "
          />
        </div>
        <div className="sidebar-title text-bold">Categories</div>
        <div
          id="category-list"
          className="category-list flex flex-col mx-4 w-42 gap-1"
        >
          <a
            href="productList.html"
            className="p-2 text-black hover:text-gray-400 border-b-1 bg-sky-50 rounded- xl"
          >
            All Products
          </a>
        </div>
        <div className="sidebar-title text-bold">Filter by Price</div>
        <div className="product-price-filter flex gap-6">
          <select
            name="minPrice"
            id="minPrice"
            className="border-1 rounded bg-gray-50"
          >
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <select
            name="maxPrice"
            id="maxPrice"
            className="border-1 rounded bg-gray-50"
          >
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="1000">1000</option>
          </select>
        </div>
        <div className="product-price-filter flex gap-6">
          <div>min price</div>
          <div>max price</div>
        </div>
        <div className="product-list-clear">
          <button
            id="searched"
            className="bg-red-200 px-8 py-1 rounded-lg border-1"
          >
            search
          </button>
        </div>
        <div className="product-list-clear">
          <button
            id="Clear"
            className="bg-orange-400 px-8 py-1 rounded-lg border-1"
          >
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
}

export default FilterProduct;
