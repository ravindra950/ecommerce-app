import Cart from "../components/Cart";

export default function CartPage({ cart, removeFromCart }) {
  return (
    <div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}
