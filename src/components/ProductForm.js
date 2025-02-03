import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null); 
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setProduct((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.image) {
      alert("Please select an image!");
      return;
    }
    dispatch(addProduct({ ...product, id: Date.now() }));

    setProduct({ title: "", price: "", category: "", image: "" });
    setPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="Product Title"
        value={product.title}
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        className="w-full p-2 mb-2 border rounded text-black"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        className="w-full p-2 mb-2 border rounded text-black"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
        className="w-full p-2 mb-2 border rounded text-black"
        required
      />
      
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef} 
        className="w-full p-2 mb-2 border rounded text-black"
        required
      />
      
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-32 h-32 object-cover mt-2 rounded shadow"
        />
      )}

      <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
