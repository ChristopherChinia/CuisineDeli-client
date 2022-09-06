import React, { useState, useEffect } from "react";
import './products.css';
import Card from "./Card";
import logo from "../components/gif/loader.gif";

const Products = () => {
  const [foods, displayfoods] = useState([]);

  useEffect(() => {
    fetch("https://rose-blossom-snowdrop.glitch.me/foodies")
      .then((r) => r.json())
      .then((data) => {
        displayfoods(data);
      });
  }, []);

  return (
    <div className="food-container">
      {foods?.length > 0 ? (
        <div className="box-container">
          {foods.map((food) => (
            <Card key={food.id} food={food} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <img src={logo} alt="loader" />
        </div>
      )}
    </div>
  );
};

export default Products;
