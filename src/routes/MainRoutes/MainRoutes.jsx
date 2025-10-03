import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Error from '../../pages/Error/Error'
import ProductList from '../../pages/ProductList/ProductList'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<ProductList />}/>
        <Route path='/productItem' element={<ProductDetail/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default MainRoutes