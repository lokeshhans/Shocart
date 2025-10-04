import "./CategoryItem.css";
import { Link } from "react-router-dom";


function CategoryItem({ itemName, filter= '' }) {
 const redLink = `/products/?category=${filter}`;
  return (
    <>
      <div
        id="category-item"
        className="category-item text-[1rem] sm:text-md md:text-lg lg:text-xl xl:text-2xl"
      >
        <Link to={redLink}>{itemName}</Link>
      </div>
    </>
  );
}

export default CategoryItem;
