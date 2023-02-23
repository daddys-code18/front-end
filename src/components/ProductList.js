import React, { useEffect } from "react";

function ProductList() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.warn("products", products);
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>Sr:No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
      </ul>

      {products.map((item, index) => (
        <ul>
          <li>{index++}</li>
          <li>{item.name}</li>
          <li>${item.price}</li>
          <li>{item.category ? item.category : "mobile"}</li>
          <li>{item.company}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
