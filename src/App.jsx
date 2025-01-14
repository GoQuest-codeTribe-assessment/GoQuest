import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Map from "./components/map/Map";
import Weather from "./components/weather/Weather";
import Activities from "./components/activities/Activities";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div className="homeContainer gutter">
        <Map />
        <Weather />
      </div>
      <Activities />
    </>
  );
}

export default App;
