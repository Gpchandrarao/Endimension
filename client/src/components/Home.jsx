import React from "react";
import Navbar from "./Navbar";
import ProductListPage from "./ProductListPage";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <ProductListPage />
    </div>
  );
};

export default Home;
