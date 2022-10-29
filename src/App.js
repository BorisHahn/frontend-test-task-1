import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import ProductItem from "./ProductItem";
import "./App.css";
import "../src/font.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const numberOfButton = Math.ceil(totalCount / 4);
  function getJSON(page = 1) {
    return fetch(
      `http://testtask.alto.codes/front-products.php?skip=${(page - 1) * 4}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalCount(data.totalCount);
        return data.products;
      });
  }

  const getCards = (page) => {
    getJSON(page)
      .then((newProductList) => {
        setProductList([...newProductList]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCards();
  }, []);

  const renderItems = (arr) => {
    const items = arr.map((item) => {
      return <ProductItem key={item.id} item={item} />;
    });
    return (
      <div className="wrapper">
        <ul className="product-list">{items}</ul>
        <Pagination
          className="pugination"
          count={numberOfButton}
          color="primary"
          defaultPage={1}
          onChange={function (event, page) {
            getCards(page);
          }}
        />
      </div>
    );
  };

  const items = renderItems(productList);

  return <div className="App">{items}</div>;
}

export default App;
