export default function Cart({ cart, removeFromCart }) {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cart.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg shadow">
                <img src={item.image} alt={item.title} className="h-32 mx-auto mb-2" />
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  