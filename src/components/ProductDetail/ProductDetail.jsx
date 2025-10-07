import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../axios/ProductApi";




function ProductDetail() {
  const {id} = useParams()
  // console.log("Route param ID:", id); // 👈 Debug
  const [productDetail, setProductDetail] = useState('')
  
  async function getProduct(id)  {
    const res = await axios.get(`${BASE_URL}/${id}`)
    // console.log(res.data) 
    setProductDetail(res.data)
  }
  useEffect(()=>{
    getProduct(id)
  },[id])
  
  return (
    productDetail && 
    <div>
      <div className="product-detail-wrapper flex items-center justify-center p-4 px-6 gap-4 bg-gray-600 min-h-[70vh]">
        <div className="product-img w-[22%] my-10 flex items-center justify-center relative">
          <img
            id="product-img"
            src= {productDetail.image}
            className="w-[90%] h-[60%] rounded"
            alt="fail"
          />
        </div>
        <div
          id="product-detail-box"
          className="product-detail-box flex flex-col items-start justify-center   w-[60%]  p-2 gap-1"
        >
          <div id="product-details" className="product-details ">
            <div
              id="product-name"
              className="product-name  text-black tracking-wider  text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl"
            ></div>
            <div
              id="product-price"
              className="product-price  text-sm md:text-md lg:text-lg xl:text-3xl"
            >{productDetail.price}</div>
            <div id="product-detail" className="product-detail">
              <div
                id="product-detail-title"
                className="product-detail-title text-voilet-700 font-bold tracking-wider mt-2 text-sm md:text-md lg:text-lg xl:text-xl "
              >
                {ProductDetail.title}
              </div>
              <div
                id="product-detail-data"
                className="product-detail-data text-gray-400 text-[1rem] sm:text-[1rem] md:text-sm lg:text-md xl:text-lg mb-2   "
              >{productDetail.description}</div>
            </div>
          </div>
          <div className="button flex gap-2   flex-col ">
            <div className="login-btn flex items-center justify-center ">
              <button
                type="submit"
                className="bg-blue-500  rounded-lg border-2 border-black cursor-pointer text-white px-16 text-sm md: text-md lg:text-1xl xl:text-xl"
              >
                Add to Cart
              </button>
            </div>
            <div className="login-btn flex items-center justify-center ">
              <button
                type="submit"
                className="bg-green-700  rounded-lg border-2 border-black cursor-pointer text-white px-17.5 text-sm md: text-md lg:text-1xl xl:text-xl"
              >
                Go to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
