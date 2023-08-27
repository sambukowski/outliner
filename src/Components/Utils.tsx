import React from "react";
import "./Utils.css";

function InputBox(props: {
  title: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="ost_visual" style={{ flex: 1 }}>
      <div>{props.title}</div>
      <input
        className="input_box"
        type="text"
        value={props.input}
        onChange={(e) => {
          let newTitle = props.input;
          newTitle = e.target.value;
          props.setInput(newTitle);
        }}
      />
    </div>
  );
}
export default InputBox;
