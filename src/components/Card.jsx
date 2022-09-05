import React from "react";
import './card.css';
import {} from "react-icons/io5";

const Card = ({ food }) => {
  const { title, cover_image, price } = food;

  console.log(food);
  return (
    <div className="foodCard">
      <div  className="food-box" >
        <div>
          <img src={cover_image ? cover_image : "https://via.placeholder.com/400"}
            alt={title} />
        </div>
        <div className="bottom">
          <h3 className="title">{title}</h3>
          <h3 className="price">{price}</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Card;