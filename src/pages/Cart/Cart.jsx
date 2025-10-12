import { useContext, useEffect, useState } from "react";
import OrderDetailsProduct from "../../components/OrderDetailsProduct/OrderDetailsProduct";
import CartContext from "../../context/CartContext";
import axios from "axios";
import { getProduct, updateProductInCart } from "../../axios/ProductApi";
import UserContext from "../../context/UserContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  async function downloadCartProducts(cart) {
    if (!cart || !cart.products) return;
    const productQuantityMapping = {}; // { 1: 3, 2: 1}
    cart.products.forEach((product) => {
      productQuantityMapping[product.productId] = product.quantity;
    });
    const productsPromise = cart.products.map((product) =>
      axios.get(getProduct(product.productId))
    );
    const productPromiseResponse = await axios.all(productsPromise);
    const downloadedProducts = productPromiseResponse.map((product) => ({
      ...product.data,
      quantity: productQuantityMapping[product.data.id],
    }));
    setProducts(downloadedProducts);
  }

  async function onProductUpdate(productId, quantity) {
    if (!user) return;
    const response = await axios.put(updateProductInCart(), {
      userId: user.id,
      productId,
      quantity,
    });
    setCart({ ...response.data });
  }

  useEffect(() => {
    downloadCartProducts(cart);
  }, [cart]);

  return (
    <div id="cart-page " className="bg-gray-400 ">
      {/* <!-- container --> */}
      <div className="container">
        {/* <!-- title --> */}
        <div className="cart-title text-center text-4xl font-semibold tracking-wide">
          Your Cart
        </div>
        <div className="row flex items-center">
          {/* <!-- Card cart-wrapper/// --> */}
          <div
            id="cart-wrapper"
            className="cart-wrapper flex items-center justify-between  gap-4 p-4 px-14"
          >
            {/* <!-- Card --> */}
            <div
              id="product-detail "
              className="product-detail flex flex-col bg-gray-600 shadow-xl rounded-lg flex-wrap gap-4 p-2 basis-3/4 justify-center"
            >
              <div className="order-details-title font-semibold pt-2 text-4xl border-b-1">
                Order Detail
              </div>

              {products.length > 0 &&
                products.map((product) => (
                  <OrderDetailsProduct
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    quantity={product.quantity}
                    onRemove={() => onProductUpdate(product.id, 0)}
                  />
                ))}
            </div>
            <div className="price-detail flex flex-col gap-4 w-1/4 p-2 self-start sticky top-0">
              <div
                id="product-detail-box"
                className="product-detail-box shadow-lg bg-gray-500 rounded"
              >
                <div
                  id="product-detail-title"
                  className="product-detail-title text-center  rounded"
                >
                  Price detail
                </div>
                <div
                  id="price-detail-data"
                  className="price-detail-data flex justify-between gap-2 px-2"
                >
                  <div id="price" className="price">
                    Price:
                  </div>
                  <div id="total-price" className="product-price"></div>
                </div>
                <div className="price-discount-data flex justify-between gap-2 px-2">
                  <div className="price">Discount:</div>
                  <div className="product-price">20</div>
                </div>
                <div className="price-delivery-data flex justify-between gap-2 px-2">
                  <div className="price">Delivery Charge:</div>
                  <div className="product-price">Free</div>
                </div>
                <div className="price-total-data flex justify-between gap-2 px-2">
                  <div className="price">Total:</div>
                  <div id="net-price" className="product-price"></div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <a href="productList.html">
                  <button
                    type="submit"
                    className="border-1 border-black px-2 rounded-lg bg-sky-500 text-white w-full"
                  >
                    Continue Shoping
                  </button>
                </a>
                <a href="checkoutlist.html">
                  <button
                    type="submit"
                    className="border-1 border-black px-2 rounded-lg bg-blue-800 text-white w-full"
                  >
                    Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
