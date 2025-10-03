import { Link } from "react-router-dom";

function ProductBox() {
  return (
    <div className="product-box m-4 bg-gray-700 rounded-xl">
      <Link
        to="/productItem"
        target="_blank  "
        className=" inline-block  shadow-lg rounded p-4 "
      >
        <div>
          <img
            src="https://www.godaddy.com/resources/wp-content/uploads/2025/02/ecommerce-featured-aO3ClS.tmp_.jpeg?size=3840x0"
            className="w-30 h-30 rounded"
            alt=""
          />
        </div>
        <div className="pro-detail text-center py-4">Some Product</div>
        <div className="price text-center">&#8377;1000</div>
      </Link>
    </div>
  );
}

export default ProductBox;
