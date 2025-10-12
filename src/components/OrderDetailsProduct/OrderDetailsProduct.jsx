function OrderDetailsProduct({ image, title, price, quantity, onRemove }) {
  const quantityAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div
        id="order-details-product"
        className="order-details-product flex bg-gray-800 shadow-lg rounded p-2 gap-4"
      >
        <div className="order-product-img w-[30%]">
          <img src={image} className="rounded" alt="" />
        </div>
        <div className="order-product-data flex w-full items-center justify-between">
          <div className="div">
            <div className="text-3xl">{title}</div>
            <div className="text-2xl">&#8377; {price}</div>
          </div>
          <div className="product-action">
            <div className="quantity flex flex-col gap-2">
              <div className="product-quantity text-md font-normal">
                Quantity
              </div>
              <form action="" className="border-1 rounded">
                <select name="" id="">
                  {quantityAvailable.map((id) => (
                    <option value={id} selected={quantity == id} key={id}>
                      {id}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <div className="remove mt-2 flex items-center justify-center">
              <button
                onClick={onRemove}
                type="submit"
                className="border-1 border-black px-10 pb-2 rounded-lg bg-red-400 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetailsProduct;
