import React, { use } from "react";
// import Food from "./food/food";
const AllFoods = ({ allFoods }) => {
  const foods = use(allFoods);
  console.log(foods);
  return (
    <div>
      <h3>all TheMealDB foods is here: {foods.meals.length}</h3>
    </div>
  );
};
export default AllFoods;
