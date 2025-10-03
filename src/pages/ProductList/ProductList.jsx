import FilterProduct from "../../components/FilterProduct/FilterProduct";
import ProductBox from "../../components/ProductBox/ProductBox";

function ProductList() {
  return (
    <div className="bg-gray-600 min-h-[80vh]">
      <div id="container  ">
        <h2 className="product-list-title text-center text-3xl mx-2 py-4 font-bold tracking-widest">
          All Products
        </h2>
        <div className="flex p-4">
          <div className="product-list-wrapper bg-sky-50 rounded-xl py-4 text-uppercase   text-black">
            <div>
              <FilterProduct />
            </div>
          </div>
          <div className="product-list-box   ">
            <div
              id="product-list-wrapper"
              className="flex items-center justify-self-center   px-16"
            >
              {/* ..................Product Items to be added here................. */}
              <div className="flex flex-wrap justify-start  gap-auto">
                <ProductBox
                  name="Hello"
                  price={1000}
                  img="https://www.godaddy.com/resources/wp-content/uploads/2025/02/ecommerce-featured-aO3ClS.tmp_.jpeg?size=3840x0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
