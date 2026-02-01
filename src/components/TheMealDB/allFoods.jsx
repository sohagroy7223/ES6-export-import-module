import React, { use } from "react";
import "./allFood.css";
import Food from "./food/food";
const AllFoods = ({ allFoods }) => {
  const foods = use(allFoods);
  // console.log(foods);
  return (
    <div>
      <h3>all TheMealDB foods is here: {foods.meals.length}</h3>
      <div className="foods">
        {foods.meals.map((food) => (
          <Food food={food}></Food>
        ))}
      </div>
    </div>
  );
};
export default AllFoods;
