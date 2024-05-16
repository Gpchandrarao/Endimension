import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ProductProvider } from "./context/ProductContext";
import CreateProduct from "./components/CreateProduct";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<CreateProduct />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
