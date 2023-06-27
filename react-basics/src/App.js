import "./components/App.css";
import Car from "./components/Car";
import Fruit from "./components/Fruit";

function App() {
  const fruits = {
    name: "Mango",
    color: "Yellow",
  };

  return (
    <div className="App">
      <Fruit fruits={fruits} />
      <hr></hr>
      <Car />
    </div>
  );
}
export default App;
