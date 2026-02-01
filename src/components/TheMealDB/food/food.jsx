import React, { useState } from "react";
import "./food.css";
const Food = ({ food }) => {
  const [buy, setBuy] = useState(false);
  const handelBuy = () => {
    setBuy(!buy);
  };

  //   console.log(food);
  return (
    <div className={`card ${buy && "clickBtn"}`}>
      <h3>name: {food.strMeal}</h3>
      <img className="img" src={food.strMealThumb} alt="" />
      <h4>strArea: {food.strArea}</h4>
      <button onClick={handelBuy}>{buy ? "cancel" : "buy"}</button>
      <button>add to card</button>
    </div>
  );
};

export default Food;
