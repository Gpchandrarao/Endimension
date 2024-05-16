import React, { useContext } from "react";
import { Table, Button } from "antd";
import { ProductContext } from "../context/ProductContext";

const ProductTable = ({ products }) => {
  const { updateProduct, deleteProduct } = useContext(ProductContext);

  const edit = (record) => {
    updateProduct(record);
  };

  const deleteProducts = (record) => {
    deleteProduct(record.id);
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "image",
      render: (image) => (
        <img src={image} alt="Product" style={{ maxWidth: "100px" }} />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <span>
          <Button
            className="edit-button"
            type="primary"
            onClick={() => edit(record)}
          >
            Edit
          </Button>
          <Button onClick={() => deleteProducts(record)}>Delete</Button>
        </span>
      ),
    },
  ];

  return <Table columns={columns} dataSource={products} />;
};

export default ProductTable;
