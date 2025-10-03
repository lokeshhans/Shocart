import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import MainRoutes from './routes/MainRoutes/MainRoutes'

function App() {

  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  )
}

export default App