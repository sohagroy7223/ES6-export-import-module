import "./App.css";
import { add, diff, malt } from "./utils/math/math";
function App() {
  const sum = add(10, 20);
  const deferent = diff(20, 10);
  const gunfol = malt(2, 5);
  console.log(sum, deferent, gunfol);
  return (
    <>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
