import "./App.css";
import Car from "./components/Car";
import Fruit from "./components/Fruit";
import ConditionExample from "./components/ConditionExampleOne.js";
import ConditionExampleTwo from "./components/ConditionExampleTwo.js";
import ConditionExampleThree from "./components/ConditionExampleThree.js";
import ListExampleOne from "./components/ListExampleOne.js";
import ListExampleTwo from "./components/ListExampleTwo.js";

function App() {
  const fruits = {
    name: "Mango",
    color: "Yellow",
  };
  const cars = [];

  return (
    <div className="App">
      <Fruit fruits={fruits} />
      <hr></hr>
      <Car />
      <hr></hr>
      Condition : if condition
      <ConditionExample isGoal={true} />
      <hr></hr>
      Condition : Ternary Operator
      <ConditionExampleTwo isGoal={false} />
      <hr></hr>
      Condition : Logical && Operator
      <ConditionExampleThree cars={cars} />
      <hr></hr>
      Rendering through list.
      <ListExampleOne />
      <hr></hr>
      Rendering through list having id/key
      <ListExampleTwo />
      <hr></hr>
    </div>
  );
}
export default App;
