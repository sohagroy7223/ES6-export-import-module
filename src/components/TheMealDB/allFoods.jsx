import React, { use, useState } from "react";
import "./allFood.css";
import Food from "./food/food";
const AllFoods = ({ allFoods }) => {
  const foods = use(allFoods);
  const [addCard, setAddCerd] = useState([]);
  const CardAdd = () => {
    console.log("add card");
  };
  // console.log(foods);
  return (
    <div>
      <h3>all TheMealDB foods is here: {foods.meals.length}</h3>
      <div className="foods">
        {foods.meals.map((food) => (
          <Food card={CardAdd} food={food}></Food>
        ))}
      </div>
    </div>
  );
};
export default AllFoods;
