import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Error from "../../pages/Error/Error";
import ProductList from "../../pages/ProductList/ProductList";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import About from "../../pages/About/About";
import SignUp from "../../pages/SignUp/SignUp";
import Login from "../../pages/Login/Login";
import Cart from "../../pages/Cart/Cart";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart/:userId" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoutes;
