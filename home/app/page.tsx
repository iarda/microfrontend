"use client";
import { useState, useEffect } from "react";

const DUMMY_PRODUCTS = [
  { id: 1, name: "Product A", price: 19.99 },
  { id: 2, name: "Product B", price: 29.99 },
  { id: 3, name: "Product C", price: 39.99 },
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem("cart");
    setCart(stored ? JSON.parse(stored) : []);
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  };

  if (!isClient) {
    return <div className="p-8 text-gray-400">Loading Cart ...</div>;
  }

  return (
    <div className="max-w-xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="space-y-4">
        {DUMMY_PRODUCTS.map((product) => (
          <div key={product.id} className="flex items-center justify-between bg-white rounded shadow p-4">
            <div>
              <div className="font-semibold">{product.name}</div>
              <div className="text-gray-500">{product.price} TL</div>
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-gray-600">
        Cart: <b>{cart.length}</b> Products
      </div>
    </div>
  );
}
