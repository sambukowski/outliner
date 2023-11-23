import React, { useState } from "react";
import { DraggableList } from "./DragAndDropList"; // Adjust the import path as necessary

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);


  return (
    <div>
      <h1>Outline</h1>
      <p>TODO: create Outline element</p>
      <div>
        {items.map((item, index) => (
          item !== "" ? <div>{index}: {item}</div> : <div>empty</div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}></div>
        <DraggableList items={items} setItems={setItems} />
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
}

export default App;
