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
              className="product-name  text-black tracking-wider  text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl"
            >Altu jalal tu aai bala ko tal tu </div>
            <div
              id="product-price"
              className="product-price  text-sm md:text-md lg:text-lg xl:text-3xl"
            >69</div>
            <div id="product-detail" className="product-detail">
              <div
                id="product-detail-title"
                className="product-detail-title text-voilet-700 font-bold tracking-wider mt-2 text-sm md:text-md lg:text-lg xl:text-xl "
              >
                electronocs
              </div>
              <div
                id="product-detail-data"
                className="product-detail-data text-gray-400 text-[1rem] sm:text-[1rem] md:text-sm lg:text-md xl:text-lg mb-2   "
              >Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)</div>
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
