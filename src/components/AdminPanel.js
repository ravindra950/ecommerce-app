// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, deleteProduct } from "../redux/productSlice";
// import ProductForm from "./ProductForm";
// import Spinner from "./Spinner";
// import { MdDashboard } from "react-icons/md";

// const AdminPanel = () => {
//   const dispatch = useDispatch();
//   const { products, status, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-6 flex items-center gap-2 justify-center">
//   <MdDashboard className="text-2xl text-blue-500" />
//   Admin Dashboard
// </h2>


//       <ProductForm />

//       {status === "loading" && <Spinner />}
//       {error && <p className="text-red-500">Error fetching products: {error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-red p-4 shadow-md rounded-lg">
//             <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
//             <h3 className="font-bold">{product.title}</h3>
//             <p>${product.price}</p>
//             <button
//               onClick={() => dispatch(deleteProduct(product.id))}
//               className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
// src/components/AdminPanel.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../redux/productSlice";
import { setOrders, setLoading, setError } from "../redux/ordersSlice";
import { setUsers } from "../redux/usersSlice";
import Spinner from "./Spinner";
import { MdDashboard } from "react-icons/md";
import ProductForm from "./ProductForm";
import { fetchOrders, fetchUsers } from "../utils/fetchData";  // A function to fetch orders and users

const AdminPanel = () => {
  const dispatch = useDispatch();

  // Product, Order, and User Data
  const { products, status, error } = useSelector((state) => state.products);
  const { orders, loading: ordersLoading, error: ordersError } = useSelector((state) => state.orders);
  const { users, loading: usersLoading, error: usersError } = useSelector((state) => state.users);

  useEffect(() => {
    // Fetch Products
    dispatch(fetchProducts());

    // Fetch Orders and Users
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const ordersData = await fetchOrders();  // You can replace this with an API call
        dispatch(setOrders(ordersData));

        const usersData = await fetchUsers();  // You can replace this with an API call
        dispatch(setUsers(usersData));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 flex items-center gap-2 justify-center">
        <MdDashboard className="text-2xl text-blue-500" />
        Admin Dashboard
      </h2>

      <ProductForm />

      {status === "loading" && <Spinner />}
      {error && <p className="text-red-500">Error fetching products: {error}</p>}

      {/* Display Product Data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-red p-4 shadow-md rounded-lg">
            <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
            <h3 className="font-bold">{product.title}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => dispatch(deleteProduct(product.id))}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Order Management */}
      <h3 className="text-xl font-semibold mt-8">Order Details</h3>
      {ordersLoading ? (
        <Spinner />
      ) : ordersError ? (
        <p className="text-red-500">Error fetching orders: {ordersError}</p>
      ) : (
        <div className="mt-4">
          <table className="w-full table-auto mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">Order ID</th>
                <th className="border px-4 py-2">User ID</th>
                <th className="border px-4 py-2">Total</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.userId}</td>
                  <td className="border px-4 py-2">${order.total}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* User Management */}
      <h3 className="text-xl font-semibold mt-8">User Information</h3>
      {usersLoading ? (
        <Spinner />
      ) : usersError ? (
        <p className="text-red-500">Error fetching users: {usersError}</p>
      ) : (
        <div className="mt-4">
          <table className="w-full table-auto mt-4">
            <thead>
              <tr>
                <th className="border px-4 py-2">User ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
