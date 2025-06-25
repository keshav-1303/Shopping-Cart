import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row 
                    items-center gap-6 p-6 mt-10 rounded-2xl 
                    backdrop-blur-xl bg-white/5 border border-white/20 
                    shadow-xl group overflow-hidden relative 
                    hover:scale-[1.02] transition-transform duration-500 ease-out">
      
      {/* Gradient hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Image */}
      <div className="min-w-[160px] max-w-[180px] h-[180px] flex-shrink-0 relative z-10 rounded-xl 
                      overflow-hidden shadow-xl border border-white/20 bg-white/5 backdrop-blur-sm">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Text + Price + Button */}
      <div className="flex flex-col justify-between flex-grow w-full relative z-10 overflow-hidden">
        {/* Title */}
        <p className="text-gray-800 font-bold text-lg truncate text-center drop-shadow-sm 
                     group-hover:text-gray-700 transition-colors duration-300">
          {item.title}
        </p>

        {/* Description */}
        <p className="text-gray-700 font-normal text-sm text-center mt-2 leading-relaxed 
                     drop-shadow-sm line-clamp-2 break-words">
          {item.description}
        </p>

        {/* Bottom section */}
        <div className="flex justify-between items-center mt-4 pt-2 flex-wrap gap-3 border-t border-white/10">
          {/* Price */}
          <div className="backdrop-blur-md bg-green-500/20 px-4 py-2 rounded-full 
                         border border-green-400/30 shadow-lg">
            <p className="text-green-700 font-bold text-lg drop-shadow-sm">
              ${item.price}
            </p>
          </div>

          {/* Button */}
          <button
            onClick={removeFromCart}
            className="text-gray-800 border-2 border-red-400/50 rounded-full font-bold 
                       text-xs py-2 px-4 uppercase flex items-center gap-2 
                       backdrop-blur-md bg-gradient-to-r from-red-500/30 to-red-600/20
                       hover:from-red-500/40 hover:to-red-600/30 hover:border-red-400/70 
                       hover:scale-105 hover:shadow-xl transition-all duration-300 
                       ease-out shadow-lg active:scale-95"
          >
            <FcDeleteDatabase className="text-xl" />
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
