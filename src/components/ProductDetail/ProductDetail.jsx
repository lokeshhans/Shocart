import React from "react";

function ProductDetail({name,img}) {
  return (
    <div>
      <div className="product-detail-wrapper flex items-center justify-center p-4 px-6 gap-4 bg-gray-600 min-h-[70vh]">
        <div className="product-img w-[22%] my-10 flex items-center justify-center relative">
          <img
            id="product-img"
            src={img}
            className="w-[90%] h-[60%] rounded"
            alt=""
          />
        </div>
        <div
          id="product-detail-box"
          className="product-detail-box flex flex-col items-start justify-center   w-[60%]  p-2 gap-1"
        >
          <div id="product-details" className="product-details ">
            <div
              id="product-name"
              className="product-name bg-black-300 text-gray-500 tracking-wider  text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl"
            ></div>
            <div
              id="product-price"
              className="product-price  text-sm md:text-md lg:text-lg xl:text-3xl"
            ></div>
            <div id="product-detail" className="product-detail">
              <div
                id="product-detail-title"
                className="product-detail-title text-voilet-700 font-bold tracking-wider mt-2 text-sm md:text-md lg:text-lg xl:text-xl "
              >
                {name}
              </div>
              <div
                id="product-detail-data"
                className="product-detail-data text-gray-400 text-[1rem] sm:text-[1rem] md:text-sm lg:text-md xl:text-lg mb-2   "
              ></div>
            </div>
          </div>
          <div className="button flex gap-2 ">
            <div className="login-btn flex items-center justify-center ">
              <button
                type="submit"
                className="bg-blue-500  rounded-lg border-2 border-black cursor-pointer text-white p-1 text-sm md: text-md lg:text-1xl xl:text-2xl"
              >
                Add to Cart
              </button>
            </div>
            <div className="login-btn flex items-center justify-center ">
              <button
                type="submit"
                className="bg-green-700  rounded-lg border-2 border-black cursor-pointer text-white p-1 text-sm md: text-md lg:text-1xl xl:text-2xl"
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
