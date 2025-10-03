import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Error from '../../pages/Error/Error'
import ProductList from '../../pages/ProductList/ProductList'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import About from '../../pages/About/About'
import SignUp from '../../pages/SignUp/SignUp'
import Login from '../../pages/Login/Login'

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/products' element={<ProductList />}/>
        <Route path='/products/:1' element={<ProductDetail img={"https://www.godaddy.com/resources/wp-content/uploads/2025/02/ecommerce-featured-aO3ClS.tmp_.jpeg?size=3840x0"} name='looking gorgeous'/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default MainRoutes