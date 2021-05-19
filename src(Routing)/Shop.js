import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Shop() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const response = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await response.json();
    console.log(items.data);
    setItems(items.data);
  };
  return (
    <div className="App">
      {items.map((item) => (
        <h1 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
