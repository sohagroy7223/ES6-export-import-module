import { Suspense } from "react";
import "./App.css";
import AllFoods from "./components/TheMealDB/allFoods";
// import { add, diff, divide as div, malt } from "./utils/math/math";

const allFoods = fetch("https://themealdb.com/api/json/v1/1/search.php?s").then(
  (res) => res.json(),
);
function App() {
  // const sum = add(10, 20);
  // const deferent = diff(20, 10);
  // const goonfol = malt(5, 5);
  // const divide = 12 / 4;
  // const something = div(20, 4);
  // console.log(sum, deferent, goonfol, something);
  return (
    <>
      <Suspense fallback={<h3>Loading foods data...</h3>}>
        <AllFoods allFoods={allFoods}></AllFoods>
      </Suspense>
    </>
  );
}

export default App;
