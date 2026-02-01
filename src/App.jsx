import "./App.css";
import { add, diff, divide as div, malt } from "./utils/math/math";
function App() {
  const sum = add(10, 20);
  const deferent = diff(20, 10);
  const goonfol = malt(5, 5);
  const divide = 12 / 4;
  const something = div(20, 4);
  console.log(sum, deferent, goonfol, something);
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
