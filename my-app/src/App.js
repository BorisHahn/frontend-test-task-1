import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import "./App.css";
import "../src/font.css";

function App() {
  let url = `http://testtask.alto.codes/front-products.php`;

  const [productList, setProductList] = useState([]);

  function getJSON() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
      return data.products;
    });
  }

  // const onProductListLoaded = (newProductList) => {
  //   setProductList((productList) =>[...productList, ...newProductList]);
  // };

  useEffect(() => {
    getJSON()
  }, []);

  // const renderItems = (arr) => {
  //   const items = arr.map((item) => {
  //     return (
  //       <li key={item.id}>
  //         <img />
  //         <div>{item.name}</div>
  //       </li>
  //     );
  //   });
  //   return <ul>{items}</ul>;
  // };

  // const items = renderItems(productList);

  return <div className="App">{<ProductItem />}</div>;
}

export default App;
