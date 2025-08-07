"use client";
import { useState, useEffect } from "react";

const DUMMY_PRODUCTS = [
  { id: 1, name: "Product A", price: 19.99 },
  { id: 2, name: "Product B", price: 29.99 },
  { id: 3, name: "Product C", price: 39.99 },
];

export default function Cart() {
  const [cart, setCart] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const getCart = () => {
      const stored = localStorage.getItem("cart");
      setCart(stored ? JSON.parse(stored) : []);
    };
    getCart();
    window.addEventListener("storage", getCart);
    return () => window.removeEventListener("storage", getCart);
  }, []);

  if (!isClient) {
    return <div className="p-8 text-gray-400">Loading Cart ...</div>;
  }

  const cartProducts = DUMMY_PRODUCTS.filter((p) => cart.includes(p.id));

  return (
    <div className="max-w-xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      {cartProducts.length === 0 ? (
        <div className="text-gray-500">Cart is empty.</div>
      ) : (
        <div className="space-y-4">
          {cartProducts.map((product) => (
            <div key={product.id} className="flex items-center justify-between bg-white rounded shadow p-4">
              <div>
                <div className="font-semibold">{product.name}</div>
                <div className="text-gray-500">{product.price} TL</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 text-gray-600">
        Total products: <b>{cart.length}</b>
      </div>
    </div>
  );
}
