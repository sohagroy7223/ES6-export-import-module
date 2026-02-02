import React, { use, useState } from "react";
import "./allFood.css";
import Food from "./food/food";
const AllFoods = ({ allFoods }) => {
  const foods = use(allFoods);

  const [ordered, setOrdered] = useState(0);

  const handelOrder = () => {
    const allOrdered = ordered + 1;
    setOrdered(allOrdered);
  };

  // console.log(foods);
  return (
    <div>
      <h3>all TheMealDB foods is here: {foods.meals.length}</h3>
      <h3>buy food: {ordered} </h3>
      <div className="foods">
        {foods.meals.map((food) => (
          <Food handelOrder={handelOrder} food={food}></Food>
        ))}
      </div>
    </div>
  );
};
export default AllFoods;
