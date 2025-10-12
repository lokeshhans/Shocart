import axios from "axios";
import { getCartByUserId } from "../axios/ProductApi";

export async function fetchUserCart(userId, setCart) {
  const response = await axios.get(getCartByUserId(userId));
  setCart(response.data[0]);
}
