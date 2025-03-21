import ProductList from "../components/ProductList";

export default function Home({ addToCart }) {
  return (
    <div>
      <ProductList addToCart={addToCart} />
    </div>
  );
}
