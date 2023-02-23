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
  const deleteProduct = async (id) => {
    console.warn(id);
    let result = await fetch(` http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
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
        <li>Operation</li>
      </ul>

      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index++}</li>
          <li>{item.name}</li>
          <li>${item.price}</li>
          <li>{item.category ? item.category : "mobile"}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
