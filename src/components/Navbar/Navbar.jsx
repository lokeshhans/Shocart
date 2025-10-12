import "./Navbar.css";

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(["jwt-token"]);
  const { user, setUser } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {}, [token]);

  function logout() {
    removeToken("jwt-token", { httpOnly: true });
    axios.get("http://localhost:8765/logout", { withCredentials: true });
    setUser(null);
    setCart(null);
  }
  return (
    <nav id="header" className=" text-black py-2 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://img.freepik.com/premium-vector/shopping-cart-logo-icon_567288-1132.jpg"
            alt="Shop Cart Logo"
          />
          <Link to="/" className="tracking-widest text-2xl font-semibold">
            Shop Cart
          </Link>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-1 bg-black"></span>
          <span className="w-6 h-1 bg-gray-500"></span>
          <span className="w-6 h-1 bg-black"></span>
        </button>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto  lg:flex flex-col lg:flex-row lg:items-center gap-4 p-4 lg:p-0`}
        >
          {/* Cart Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setIsCartOpen(!isCartOpen);
                setIsUserOpen(false);
              }}
              className="hover:text-gray-200 flex items-center gap-1 w-[100%] justify-end"
            >
              Cart {cart && cart.products && `(${cart.products.length})`}
            </button>
            {isCartOpen && (
              <div className="absolute right-0 mt-6 w-40 bg-white text-black rounded-lg shadow-lg z-50">
                {user && (
                  <Link
                    to={`/cart/${user.id}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    View Cart
                  </Link>
                )}
                {/* ------- */}
                {token["jwt-token"] ? (
                  <Link
                    onClick={() => {
                      logout();
                    }}
                    to="/signin"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/signin"
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* User Info Dropdown */}
          <div className="relative">
            {user && (
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                {user.username}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
