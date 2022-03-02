import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islandsData from "./data/islands";
import { useState } from "react";

function App() {
  const [island, setIsland] = useState(islandsData[1]);
  const [islands, setIslands] = useState(islandsData);

  const incrementVisitors = (island) => {
    island.visitors++
    setIslands([...islands])
  };
  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} />
        <IslandForm island={island} incrementVisitors={incrementVisitors} />
      </div>
    </div>
  );
}

export default App;
