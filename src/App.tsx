import React, { useState } from "react";

import "./App.css";
import Tabs from "./Components/Tabs";
import { InputBox } from "./Components/Utils";



function App() {
  const [title, setTitle] = useState("Title");

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }
    }>
      <div className="App-header" style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ fontSize: 60, padding: 10, color: "white" }}>outliner</div>
        <InputBox
          input={title}
          setInput={setTitle} />
      </div>
      <Tabs />
    </div >
  );
}

export default App;
