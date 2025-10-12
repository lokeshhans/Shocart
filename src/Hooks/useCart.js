import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { getCartByUserId } from "../axios/ProductApi";
import axios from "axios";

function useCart(userId) {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    getCartByUserId(userId, setCart);
  }, [userId]);

  return [cart, setCart];
}
export default useCart;
