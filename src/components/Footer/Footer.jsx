import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
  return (
    <footer className="foot  text-black  bottom-0 w-full">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://img.freepik.com/premium-vector/shopping-cart-logo-icon_567288-1132.jpg"
              alt="Shop Cart Logo"
              className="w-12 h-12 rounded-xl"
            />
            <h2 className="text-2xl font-bold"><a href="/">Shop Cart</a></h2>
          </div>
          <p className="text-gray-700 text-sm">
            Your one-stop online shopping destination. Fast delivery, best prices, 
            and secure checkout experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-gray-300">Shop</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="tel:+9118001801800" className="hover:text-gray-300">Contact <span>+91-18001801800</span> </Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-6">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">
            © {new Date().getFullYear()} Shop Cart. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
