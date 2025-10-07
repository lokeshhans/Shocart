import CategoryItem from "../../components/CategoryItem/CategoryItem";
import useCategorys from "../../Hooks/useCategorys";
import Loader from "../../components/Loader/Loader";
function Home() {
  const [categoryList] = useCategorys()
  return (
      <div id="container" className="container flex flex-col justify-center bg-gray-400 min-h-[70vh] ">
        <h2 className="text-center text-5xl font-bold pt-[2rem] tracking-[.7rem] px-8">
          Welcome to Shop Cart
        </h2>
        <div
          id="category-List"
          className="catogry-list flex items-cetner justify-center gap-2 sm:gap-1 md:gap-2 lg:gap-4 xl:gap-6 mt-6 flex-wrap "
        >
          {/* <!-- To Do add catagory child --> */}
          <CategoryItem itemName="All Product" />
          {!categoryList && <Loader />}
          {categoryList && categoryList.map((item, index) => (
            <CategoryItem key={index} itemName={item} filter={item} />
          ))  }

        </div>

        <div className="catogry-title flex  text-3xl  items-cetner justify-center mt-[4rem]">
          Select items
          {/* <!-- To Do add catagory child --> */}
        </div>
      </div>
  );
}

export default Home;
