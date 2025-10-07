import { useNavigate, useSearchParams } from "react-router-dom";
import useCategorys from "../../Hooks/useCategorys";

function FilterProduct() {
  const minPrice = [0, 10, 20, 50, 100, 200];
  const maxPrice = [0, 10, 20, 50, 100, 200, 1000];
  const [query] = useSearchParams();
  const [categoryList] = useCategorys()
  const navigater = useNavigate()

  function handlesearchparams(category){
    navigater(`/products?category=${category}`)
  }
  
  return (
    <>
      <div className="product-list-sidebar flex items-start pl-4  flex-col gap-2">
        <div className="product-list-search ">Search products</div>
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
          {categoryList &&
            categoryList.map((category, index) => (
              <a
                onClick={()=>handlesearchparams(category)}
                key={index}
                category={category}
                className="p-2 text-black hover:text-gray-400 border-b-1 bg-sky-100 rounded- xl"
              >
                {category}
              </a>
            ))}
        </div>
        <div className="sidebar-title text-bold">Filter by Price</div>
        <div className="product-price-filter flex gap-6">
          <select
            name="minPrice"
            id="minPrice"
            className="border-1 rounded bg-gray-50 px-2 hover:cursor-pointer "
          >
            {minPrice.map((optionValue) => (
              <option key={optionValue} value={optionValue}>
                {optionValue}
              </option>
            ))}
          </select>
          <select
            name="maxPrice"
            id="maxPrice"
            className="border-1 rounded bg-gray-50 px-2"
          >
            {maxPrice.map((optionValue) => (
              <option key={optionValue} value={optionValue}>
                {optionValue}
              </option>
            ))}
          </select>
        </div>
        <div className="product-price-filter flex gap-6">
          <div>Min price</div>
          <div>Max price</div>
        </div>
        <div className="btn flex gap-2">
          <div className="product-list-clear ">
            <button
              id="searched"
              className="bg-red-200 p-2  rounded-lg border-1"
            >
              search
            </button>
          </div>
          <div className="product-list-clear">
            <button
              id="Clear"
              className="bg-orange-400 p-2 rounded-lg border-1"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterProduct;
