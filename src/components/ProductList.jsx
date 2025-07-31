import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const staticProducts = [
    {
      id: 1,
      title: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      price: "100.00",
      rating: 4,
      stock: 20,
      quantity: 0,
    },
    {
      id: 2,
      title: "Earphone",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWFycGhvbmV8ZW58MHx8MHx8fDA%3D",
      price: "40.00",
      rating: 3,
      stock: 20,
      quantity: 0,
    },
    {
      id: 3,
      title: "Watch",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2F0Y2h8ZW58MHx8MHx8fDA%3D",
      price: "70.84",
      rating: 4,
      stock: 20,
      quantity: 0,
    },
    {
      id: 4,
      title: "Mobile",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=200",
      price: "1000.84",
      rating: 5,
      stock: 20,
      quantity: 0,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products"));
    if (saved && saved.length > 0) {
      setProducts(saved);
    } else {
      setProducts(staticProducts);
      localStorage.setItem("products", JSON.stringify(staticProducts));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center p-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} products={products} />
      ))}
    </div>
  );
};

export default ProductList;
