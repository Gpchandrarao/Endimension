import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Form, Input, Button, Upload } from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import { ProductContext } from "../context/ProductContext";

const CreateProduct = () => {
  const { addProduct } = useContext(ProductContext);

  const onFinish = () => {
    addProduct();
  };

  return (
    <div className="create-product-container">
      <Navbar />
      <div className="create-product-items-container">
        <h1>Create Product</h1>
        <Form
          name="addProductForm"
          onFinish={onFinish}
          initialValues={{
            id: "",
            name: "",
            description: "",
            price: "",
            image: "",
          }}
        >
          <Form.Item
            name="id"
            label="Id"
            rules={[{ required: true, message: "Please enter the Product Id" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: "Please enter the Product Name" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please enter the Product Description",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[
              { required: true, message: "Please enter the Product Price" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image"
            rules={[{ required: true, message: "Please upload an image" }]}
          >
            <Upload listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item className="upload">
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
            <Link to="/">
              <Button style={{ marginLeft: "8px" }}>Cancel</Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateProduct;
