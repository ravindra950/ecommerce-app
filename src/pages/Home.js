import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Product List</h2>
      <ProductList />
    </div>
  );
};

export default Home;
