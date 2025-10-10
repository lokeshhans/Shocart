// css import 
import './App.css'
// component import 
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

// context import 
import UserContext from './context/UserContext'
import CartContext from './context/CartContext'
//library import
import axios from 'axios'
import { useCookies } from 'react-cookie'
import  { jwtDecode }  from "jwt-decode";
import { useEffect, useState } from 'react'
// api imports
import MainRoutes from './routes/MainRoutes/MainRoutes'


function App() {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState({products:[]})
  const [token, setToken] = useCookies(['jwt-token'])

  function accesstoken(){
    axios.get('http://localhost:8765/accesstoken',{withCredentials:true})
    .then((res)=>{
      const tokenDetail = jwtDecode(res.data.token)
      setUser({user:tokenDetail.user, id:tokenDetail.id});
      setToken('jwt-token',res.data.token, {httpOnly:true}) 
    })
  }
  useEffect(()=>{
    accesstoken();
  },[])
  return (
    <UserContext.Provider value={{user, setUser}}>
      <CartContext.Provider value={{ cart, setCart }}>
      <div>
        <Navbar />
        <MainRoutes />
        <Footer />
      </div>
      </CartContext.Provider>
    </UserContext.Provider>
  )
}

export default App