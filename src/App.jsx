// css import
import "./App.css";
// component import
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// context import
import UserContext from "./context/UserContext";
import CartContext from "./context/CartContext";
//library import
import axios from "axios";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
// api imports
import MainRoutes from "./routes/MainRoutes/MainRoutes";
import { fetchUserCart } from "./helpers/fetchUserCartHelper";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [token, setToken] = useCookies(["jwt-token"]);

  async function accessToken() {
    const res = await axios.get(`http://localhost:8765/accesstoken`, {
      withCredentials: true,
    });
    setToken("jwt-token", res.data.token, { httpOnly: true });
    const tokenDetails = jwtDecode(res.data.token);
    setUser({ username: tokenDetails.user, id: tokenDetails.id });
  }

  async function load() {
    if (!user) {
      await accessToken();
    }

    if (user) {
      await fetchUserCart(user.id, setCart);
    }
  }
  useEffect(() => {
    load();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div>
          <Navbar />
          <MainRoutes />
          <Footer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
