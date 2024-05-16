import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductTable from "../components/ProductTable";
import { Button } from "antd";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="productListPage-container">
      <div className="products-but-container">
        <h1>Product List ({products.length})</h1>
        <Link to="/products">
          <Button type="primary">Create a new products</Button>
        </Link>
      </div>

      <ProductTable products={products} />
    </div>
  );
};

export default ProductListPage;
