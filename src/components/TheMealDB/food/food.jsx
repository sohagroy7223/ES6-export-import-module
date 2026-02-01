import React from "react";
import "./food.css";
const Food = ({ food }) => {
  console.log(food);
  return (
    <div className="card">
      <h3>name: {food.strMeal}</h3>
      <img className="img" src={food.strMealThumb} alt="" />
      <h4>strArea: {food.strArea}</h4>
    </div>
  );
};

export default Food;
