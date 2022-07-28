import "./App.css";
import { mockData } from "./mockData.js";
import { CardComponent } from "./cardComponent.js";

function App() {
  const sortedDrivers = function (data) {
    data.sort((a, b) => {
      return b.points - a.points;
    });
  };
  sortedDrivers(mockData);

  return (
    <div className="flex container">
      {mockData.map((driver, index) => {
        return (
          <CardComponent key={driver.number} driver={driver} index={index} />
        );
      })}
    </div>
  );
}

export default App;
