
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlistSlice";
import useFetch from "../hooks/useFetch";
import Spinner from "./Spinner";
import {  FaRegHeart} from "react-icons/fa";

const ProductList = () => {
  const { data: products, loading, error } = useFetch("https://fakestoreapi.com/products");
  const dispatch = useDispatch();

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500">Error loading products.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
          <h3 className="font-bold">{product.title}</h3>
          <p>${product.price}</p>
          <button
  onClick={() => dispatch(addToWishlist(product))}
  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
>
  <FaRegHeart className="text-white" />
</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
