import { Link } from "react-router-dom";

function ProductBox({ name, img, price, itemId }) {
  const itemName = name.split(" ").slice(0, 3).join(" ");
  return (
    <div className="product-box m-4 bg-gray-700 rounded-xl">
      <Link
        to={`/products/${itemId}`}
        className=" inline-block  shadow-lg rounded p-4 "
      >
        <div>
          <img src={img} className="w-70 h-100 rounded" alt="" />
        </div>
        <div className="pro-detail text-center py-4">{itemName}</div>
        <div className="price text-center">&#8377;{price}</div>
      </Link>
    </div>
  );
}

export default ProductBox;
