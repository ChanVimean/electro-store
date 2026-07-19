import { FaTrashAlt, FaTicketAlt, FaArrowRight } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQty,
    clearCart,
    total,
    count,
  } = useCart();

  return (
    <div className="max-w-7xl mx-auto my-10 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left: Cart Items */}
      <section className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800">Shopping Cart</h1>
          <span className="text-sm text-gray-500">{count} item</span>
          <button className="text-sm text-red-500" onClick={() => clearCart()}>Clear Cart</button>
        </div>
        <hr className="border-gray-100" />

        <table className="w-full mt-4">
          <thead>
            <tr className="grid grid-cols-12 text-xs uppercase tracking-wide text-gray-400 pb-3">
              <th className="col-span-6 text-left font-medium">Product</th>
              <th className="col-span-3 text-center font-medium">Quantity</th>
              <th className="col-span-2 text-right font-medium">Price</th>
              <th className="col-span-1"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr
                key={index}
                className="grid grid-cols-12 items-center py-4 border-t border-gray-100"
              >
                {/* Product Detail */}
                <td className="col-span-6 flex items-center gap-4">
                  <div className="w-16 h-16 shrink-0 rounded-xl bg-amber-50 flex items-center justify-center text-amber-300">
                    <img src={item.image} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-800 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-400">Audio</p>
                  </div>
                </td>

                {/* Increment/Decrement */}
                <td className="col-span-3">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600 transition-colors"
                    >
                      -
                    </button>
                    <p className="w-6 text-center font-medium text-gray-800">
                      {item.qty}
                    </p>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </td>

                {/* Price */}
                <td className="col-span-2 text-right font-semibold text-gray-800">
                  ${item.price}
                </td>

                {/* Remove from cart */}
                <td className="col-span-1 flex justify-end">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <FaTrashAlt size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Right: Payment */}
      <section className="lg:col-span-5 flex flex-col gap-6">
        {/* Coupon */}
        <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
            <FaTicketAlt className="text-amber-500" />
            Coupon Code
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <button
              onClick={() => {}}
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Apply
            </button>
          </div>
        </aside>

        {/* Summary */}
        <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Order Summary</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span className="text-gray-700">$0</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span className="text-gray-700">$0</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Tax</span>
              <span className="text-gray-700">$0</span>
            </div>
            <hr className="border-gray-100 my-1" />
            <div className="flex justify-between text-base font-bold text-gray-800">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <button
            onClick={() => {}}
            className="w-full mt-6 flex items-center justify-center gap-2 rounded-xl bg-amber-600 text-white font-medium py-3 hover:bg-amber-700 transition-colors"
          >
            Checkout
            <FaArrowRight size={14} />
          </button>
        </aside>
      </section>
    </div>
  );
};

export default Cart;
