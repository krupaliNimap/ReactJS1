import logo from "./logo.svg";
import "./App.css";
import HooksCounter from "./components/HooksCounter";
import HooksCounterTwo from "./components/HooksCounterTwo";
import HooksCounterThree from "./components/HooksCounterThree";
import HooksCounterFour from "./components/HooksCounterFour";

function App() {
  return (
    <div className="App">
      <HooksCounter></HooksCounter>
      <hr></hr>
      <HooksCounterTwo></HooksCounterTwo>
      <hr></hr>
      <HooksCounterThree></HooksCounterThree>
      <hr></hr>
      <HooksCounterFour></HooksCounterFour>
    </div>
  );
}

export default App;
