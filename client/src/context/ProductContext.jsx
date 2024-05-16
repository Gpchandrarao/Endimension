// src/context/ProductContext.jsx
import React, { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8080/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (product) => {
    setProducts(products.map((pro) => (pro.id === product.id ? product : pro)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((pro) => pro.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
