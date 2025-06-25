import React, { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = React.memo(({ post }) => {
  const dispatch = useDispatch();

  const inCart = useSelector(
    (state) => state.cart.some((item) => item.id === post.id),
    shallowEqual
  );

  const addToCart = useCallback(() => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }, [dispatch, post]);

  const removeFromCart = useCallback(() => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }, [dispatch, post.id]);

  const shortDescription = useMemo(() => {
    return post.description.split(" ").slice(0, 12).join(" ") + "...";
  }, [post.description]);

  return (
    <div className="flex flex-col items-center justify-between 
                    hover:scale-105 transition duration-500 ease-out 
                    gap-4 p-6 mt-10 ml-5 rounded-2xl 
                    bg-white/10 group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <p className="relative z-10 w-full text-gray-800 font-bold text-lg text-center truncate mt-1 
                    drop-shadow-sm group-hover:text-gray-700 transition-colors duration-300">
        {post.title}
      </p>

      <p className="relative z-10 w-full text-gray-700 text-sm text-center leading-relaxed 
                    drop-shadow-sm h-12 overflow-hidden">
        {shortDescription}
      </p>

      <div className="h-[180px] w-full relative z-10 rounded-xl overflow-hidden 
                      shadow-xl border border-white/20 bg-white/10 bg-white/5">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-contain group-hover:scale-105 
                     transition-transform duration-500 p-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex justify-between items-center w-full mt-4 relative z-10">
        <div className="bg-white/10 bg-green-500/20 px-4 py-2 rounded-full 
                        border border-green-400/30 shadow-lg">
          <p className="text-green-700 font-bold text-lg drop-shadow-sm">${post.price}</p>
        </div>

        <button
          className={`text-gray-800 border-2 rounded-full font-bold text-xs py-2 px-4 uppercase 
                      bg-white/10 transition duration-300 ease-out shadow-lg
                      hover:scale-105 hover:shadow-xl active:scale-95
                      ${
                        inCart
                          ? "border-red-400/50 bg-gradient-to-r from-red-500/30 to-red-600/20 hover:from-red-500/40 hover:to-red-600/30 hover:border-red-400/70"
                          : "border-green-400/50 bg-gradient-to-r from-green-500/30 to-green-600/20 hover:from-green-500/40 hover:to-green-600/30 hover:border-green-400/70"
                      }`}
          onClick={inCart ? removeFromCart : addToCart}
        >
          {inCart ? "Remove Item" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
});

export default Product;
