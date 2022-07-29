import "./App.css";
import { mockData } from "./mockData.js";
import { CardComponent } from "./cardComponent.js";
import { useState } from "react";

function App() {
  const [drivers, setDrivers] = useState(mockData);

  const sortDrivers = () => {
    return drivers.sort((a, b) => {
      return b.points - a.points;
    });
  };

  const handleIncrementFunction = (number) => {
    const newArray = [...drivers];

    const findDriver = newArray.find((elem) => {
      return elem.number === number;
    });

    findDriver.points++;

    setDrivers(newArray);
  };

  return (
    <div className="flex container">
      {sortDrivers().map((driver, index) => {
        return (
          <CardComponent
            key={driver.number}
            driver={driver}
            index={index}
            onIncrement={handleIncrementFunction}
          />
        );
      })}
    </div>
  );
}

export default App;
