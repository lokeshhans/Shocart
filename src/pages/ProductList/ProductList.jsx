
function ProductList() {
  return (
    <div className="bg-gray-600 min-h-[80vh]">
      <div id="container  ">
        <h2 class="product-list-title text-center text-3xl mx-2 py-4 font-bold tracking-widest">
          All Products
        </h2>
        <div class="flex p-4">
          <div class="product-list-wrapper bg-sky-50 rounded-xl py-4 text-uppercase   text-black">
            <div>
              <div class="product-list-sidebar flex items-center flex-col gap-2">
                <div class="product-list-search">Search products</div>
                <div class="product-list-search-items">
                  <input
                    type="search"
                    class="border-1 rounded"
                    placeholder="search Products...    "
                  />
                </div>
                <div class="sidebar-title text-bold">Categories</div>
                <div
                  id="category-list"
                  class="category-list flex flex-col mx-4 w-42 gap-1"
                >
                  <a
                    href="productList.html"
                    class="p-2 text-black hover:text-gray-400 border-b-1 bg-sky-50 rounded- xl"
                  >
                    All Products
                  </a>
                </div>
                <div class="sidebar-title text-bold">Filter by Price</div>
                <div class="product-price-filter flex gap-6">
                  <select
                    name="minPrice"
                    id="minPrice"
                    class="border-1 rounded bg-gray-50"
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
                    class="border-1 rounded bg-gray-50"
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
                <div class="product-price-filter flex gap-6">
                  <div>min price</div>
                  <div>max price</div>
                </div>
                <div class="product-list-clear">
                  <button
                    id="searched"
                    class="bg-red-200 px-8 py-1 rounded-lg border-1"
                  >
                    search
                  </button>
                </div>
                <div class="product-list-clear">
                  <button
                    id="Clear"
                    class="bg-orange-400 px-8 py-1 rounded-lg border-1"
                  >
                    Clear Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="product-list-box   ">
            <div
              id="product-list-wrapper"
              class="flex flex-wrap gap-2 items-center justify-center"
            >
              {/* <!-- <a href="productDetail.html" target="_blank  " class=" inline-block  shadow-lg rounded p-4">
              <div >
                <img
                src="https://www.godaddy.com/resources/wp-content/uploads/2025/02/ecommerce-featured-aO3ClS.tmp_.jpeg?size=3840x0"
                class="w-30 h-30 rounded" alt="" /></div>
              <div class="pro-detail text-center ">Some Product</div>
              <div class="price text-center">&#8377;1000</div>
            </a> --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
