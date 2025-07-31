import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";

const Navbar = () => {
  // const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   setCartCount(cartItems.length);
  // }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center mb-4">
      <h1 className="text-xl font-bold text-gray-700">My Shop</h1>
      <div className="space-x-6 flex items-center relative">
        <Link to="/" className="text-blue-600 hover:underline">
          Products
        </Link>

        <Link to="/cart" className="relative text-blue-600">
          <CartIcon />
          {/* {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )} */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
