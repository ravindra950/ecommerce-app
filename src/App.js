
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AdminPanel from "./components/AdminPanel";
import Wishlist from "./components/WishList";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";


function App() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <Router>
      <div className="bg-white shadow-md">
        <Navbar />
      </div>

      <div className={`min-h-screen ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
