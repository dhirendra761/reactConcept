import React, { useEffect, useState } from "react";
import "./App.css";
function ItemDetail({ match }) {
  const [item, setItem] = useState({
    name: "",
  });
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const response = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await response.json();
    console.log(item.data);
    setItem(item.data);
  };
  return (
    <div className="App">
      <h1>{item.item.name}</h1>
    </div>
  );
}

export default ItemDetail;
