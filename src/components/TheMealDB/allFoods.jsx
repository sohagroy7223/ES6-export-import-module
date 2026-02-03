import React, { use, useEffect, useState } from "react";
import "./allFood.css";
import Food from "./food/food";
import {
  addStoreCard,
  getStoreCard,
} from "../../utils/localStorage/localStorage";

const AllFoods = ({ allFoods }) => {
  const foods = use(allFoods);
  const [addCard, setAddCard] = useState([]);

  useEffect(() => {
    const storeCardId = getStoreCard();
    // console.log(storeCardId);

    const storeCard = [];

    for (const id of storeCardId) {
      // console.log(id);
      // console.log(id);
      // console.log(foods);

      const cardFoods = foods.meals.find((food) => (food.idMeal = id));
      console.log(cardFoods);
      if (cardFoods) {
        storeCard.push(cardFoods);
        setAddCard(...addCard, storeCard);
      }
      // console.log("stor card", setAddCard(storeCard));
    }
    // console.log(stodecard);
  }, [foods]);

  const [ordered, setOrdered] = useState(0);

  const handelOrder = () => {
    const allOrdered = ordered + 1;
    setOrdered(allOrdered);
  };

  const handleAddCard = (food) => {
    console.log(" add card", food);
    const AllCard = [...addCard, food];
    setAddCard(AllCard);
    addStoreCard(food.idMeal);
  };

  // console.log(foods);
  return (
    <div>
      <h3>all TheMealDB foods is here: {foods.meals.length}</h3>
      <h3>buy food: {ordered} </h3>
      <div className="display">
        {addCard.map((card) => (
          <div className="Card" key={card.idMeal}>
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
