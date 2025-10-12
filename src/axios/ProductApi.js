export const url = "http://localhost:8765";

export function signup() {
  return `${url}/users`;
}
export function signin() {
  return `${url}/auth/login`;
}
export function getCartByUserId(userId) {
  return `${url}/carts/user/${userId}`;
}
export function getProduct(id) {
  return `${url}/products/${id}`;
}
export function addProductToUserCart() {
  return `${url}/carts`;
}
export function updateProductInCart() {
  return `${url}/carts/updateProduct`;
}
