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

  const [addCard, setAddCard] = useState([]);

  const handleAddCard = (food) => {
    console.log(" add card", food);
    const AllCard = [...addCard, food];
    setAddCard(AllCard);
  };

  // console.log(foods);
  return (
    <div>
      <h3>all TheMealDB foods is here: {foods.meals.length}</h3>
      <h3>buy food: {ordered} </h3>
      <div className="display">
        {addCard.map((card) => (
          <div className="cardd ">
            <h5>name: {card.strMeal}</h5>
            <img className="w" card={card} src={card.strMealThumb}></img>
            <p>strCategory: {card.strCategory}</p>
          </div>
        ))}
      </div>
      <div className="foods">
        {foods.meals.map((food) => (
          <Food
            key={food.idMeal}
            handleAddCard={handleAddCard}
            handelOrder={handelOrder}
            food={food}
          ></Food>
        ))}
      </div>
    </div>
  );
};
export default AllFoods;
