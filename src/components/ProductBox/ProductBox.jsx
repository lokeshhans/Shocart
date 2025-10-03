import { Link } from "react-router-dom";

function ProductBox({name,img,price}) {
  return (
    <div className="product-box m-4 bg-gray-700 rounded-xl">
      <Link
        to="/products/1"
        className=" inline-block  shadow-lg rounded p-4 "
      >
        <div>
          <img
            src={img}
            className="w-30 h-30 rounded"
            alt=""
          />
        </div>
        <div className="pro-detail text-center py-4">{name}</div>
        <div className="price text-center">&#8377;{price}</div>
      </Link>
    </div>
  );
}

export default ProductBox;
