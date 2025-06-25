import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center h-15 max-w-6xl mx-auto 
                     backdrop-blur-md bg-black/20 border border-gray-700/30 
                     rounded-lg shadow-2xl m-2 hover:bg-black/25 transition-all duration-300">

        <NavLink to="/">
          <div className="ml-5">
          <img src="../logo.png" className="h-16 p-2 drop-shadow-lg"/>
          </div>
        </NavLink>

          <div className="flex items-center font-large text-black-100 mr-5 space-x-6">
            <NavLink to="/">
              <p className="hover:text-gray-500 transition-colors duration-200 
                           drop-shadow-sm hover:drop-shadow-md">Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative hover:scale-105 transition-transform duration-200 
                             hover:drop-shadow-lg">
                  <FaShoppingCart className="text-2xl drop-shadow-sm text-black-100 
                                           hover:text-gray-500 transition-colors duration-200"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 
                              text-xs w-5 h-5 flex justify-center items-center animate-bounce 
                              rounded-full text-white shadow-xl border border-gray-300/20 
                              backdrop-blur-sm hover:from-emerald-400 hover:to-green-400
                              transition-all duration-200" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;