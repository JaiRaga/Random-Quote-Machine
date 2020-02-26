import React, { useState } from "react";
import "./App.css";
import Quote from "./components/Quote";

const App = () => {
  const [bg, setBg] = useState("rgb(255, 105, 100)");

  const callback = color => {
    const { r, g, b } = color;
    setBg(`rgb(${r}, ${g}, ${b})`);
  };

  const style = {
    backgroundColor: bg
  };

  return (
    <div className="App" style={style}>
      <Quote parentCb={callback} />
      <p>by Raga</p>
    </div>
  );
};

export default App;
