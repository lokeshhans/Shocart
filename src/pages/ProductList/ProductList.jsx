import axios from "axios";
import FilterProduct from "../../components/FilterProduct/FilterProduct";
import ProductBox from "../../components/ProductBox/ProductBox";
import { useState } from "react";
const BASE_URL = 'https://fakestoreapi.com/products';
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";


function  ProductList() {
  const [products, setProducts] = useState(null);
  const [query] = useSearchParams();

  const getAllProducts = async (category) => { 
    try {
      const catQuery = category ? `${BASE_URL}/category/${category}` : BASE_URL;
        const response = await axios.get(catQuery);
        setProducts(response.data);
        // console.log(response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
  useEffect(() => {
    getAllProducts(query.get('category'));
    // Fetch products from API and set state
  }, [query.get('category')]);
  return (
    <div className="bg-gray-600 min-h-[80vh]">
      <div id="container  ">
        <h2 className="product-list-title text-center text-3xl mx-2 py-4 font-bold tracking-widest">
          All Products
        </h2>
        <div className="flex p-4">
          <div className="product-list-wrapper bg-sky-50 rounded-xl py-4 text-uppercase   text-black">
            <div>
              <FilterProduct   />
            </div>
          </div>
          <div className="product-list-box   ">
            <div
              id="product-list-wrapper"
              className="flex items-center justify-self-center   px-16"
            >
              {/* ..................Product Items to be added here................. */}
              <div className="flex flex-wrap justify-start  gap-auto">
                {
                  products && products.map((item) => <ProductBox
                  key={item.id}
                  name={item.title}
                  price={item.price}
                  img={item.image }
                />)

                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
