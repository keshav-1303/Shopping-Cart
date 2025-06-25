import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {
          cart.length > 0 ? 
          (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items Section */}
              <div className="lg:col-span-2">
                <div className="bg-white/25 backdrop-blur-md rounded-xl shadow-lg border border-white/30 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h2>
                  <div className="space-y-4">
                    {
                      cart.map( (item,index) => {
                        return (
                          <div key={item.id} className="bg-white/30 backdrop-blur-sm rounded-lg border border-white/40 p-1">
                            <CartItem item={item} itemIndex={index} />
                          </div>
                        )
                      } )
                    }
                  </div>
                </div>
              </div>

              {/* Cart Summary Section */}
              <div className="lg:col-span-1">
                <div className="bg-white/25 backdrop-blur-md rounded-xl shadow-lg border border-white/30 p-6 sticky top-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your Cart</h3>
                    <p className="text-lg font-semibold text-gray-700">Summary</p>
                    <div className="mt-4 p-4 bg-white/20 backdrop-blur-sm rounded-lg border border-white/40">
                      <span className="text-gray-700 font-medium">Total Items: {cart.length}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/30 pt-6">
                    <p className="text-2xl font-bold text-gray-900 mb-6">
                      Total Amount: <span className="text-blue-600">${totalAmount.toFixed(2)}</span>
                    </p>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg backdrop-blur-sm">
                      CheckOut Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          (
            <div className="flex flex-col items-center justify-center min-h-96">
              <div className="bg-white/25 backdrop-blur-md rounded-xl shadow-lg border border-white/30 p-12 text-center max-w-md">
                <div className="text-6xl mb-6 text-gray-400">🛒</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Cart Empty</h1>
                <p className="text-gray-600 mb-8">Your cart is waiting to be filled with amazing products!</p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg backdrop-blur-sm"
                >
                  Shop Now
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Cart;