import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
  <FaHeart className="text-red-500" /> Your Wishlist <FaHeart className="text-red-500" /> 
</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain"
              />
              <h3 className="text-lg text-black font-semibold mt-3">{product.title}</h3>
              <p className="text-gray-600 mt-1">{product.category}</p>
              <p className="text-green-600 font-bold mt-2">${product.price}</p>
              <button
  onClick={() => dispatch(removeFromWishlist(product))}
>
  <FaHeart className="text-red-500   text-xl transition duration-300" />
</button>

            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
