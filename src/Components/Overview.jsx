import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const Overview = () => {
  // Sample order data
  const orders = [
    {
      id: 1,
      name: "Rocking Chair",
      image:
        "https://m.media-amazon.com/images/I/81cnVBZ+48S._AC_UF894,1000_QL80_.jpg",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Side Chair",
      image: "https://m.media-amazon.com/images/I/715jjU2Qo+L._AC_SL1000_.jpg",
      price: 150,
      quantity: 2,
    },
    {
      id: 3,
      name: "Lounge Chair",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKj92T39cMH7X04kaNJcXQRJWAjuboc_6lw&s",
      price: 200,
      quantity: 1,
    },
  ];

  // Calculate subtotal
  const subtotal = orders.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 20; // Example shipping cost
  const tax = subtotal * 0.1; // Example tax rate of 10%
  const total = subtotal + shipping + tax;

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
      {/* Left Side - Order List */}
      <div className="w-full md:w-3/4 p-4">
        <h1 className="text-2xl font-semibold mb-6">
          An Overview of Your Order
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              {/* Quantity Controls */}
              <div className="flex items-center">
                <button className="p-2 bg-gray-200 rounded-l-md">
                  <FaMinus />
                </button>
                <span className="px-4 py-2 border">{order.quantity}</span>
                <button className="p-2 bg-gray-200 rounded-r-md">
                  <FaPlus />
                </button>
              </div>
              {/* Chair Image */}
              <img
                src={order.image}
                alt={order.name}
                className="w-20 h-20 object-cover rounded-md mx-4"
              />
              {/* Chair Info and Actions */}
              <div className="flex flex-col flex-1">
                <h2 className="text-lg font-semibold">{order.name}</h2>
                <button className="mt-2 text-red-500 hover:text-red-700">
                  <FaTrash className="inline mr-2" /> Delete
                </button>
              </div>
              {/* Price */}
              <p className="text-lg font-semibold">
                ${order.price * order.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Order Summary */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 border-t pt-2 font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-black text-white py-2 rounded-md">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default Overview;
