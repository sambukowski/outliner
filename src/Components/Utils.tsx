import React, { useRef, useEffect } from "react";
import "./Utils.css";

function DescriptionBox(props: {
  title: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const handleInput = () => {
    if (textAreaRef.current) {
      // Reset the textarea's height in case of content deletion
      textAreaRef.current.style.height = "inherit";

      // Adjust the height
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    handleInput();
  }, []);

  return (
    <div className="ost_visual" style={{ flex: 1 }}>
      <div style={{ textAlign: "left" }}>{props.title}</div>
      <textarea
        className="input_box"
        ref={textAreaRef}
        onInput={handleInput}
        placeholder={props.input}
        onChange={(e) => {
          let newTitle = props.input;
          newTitle = e.target.value;
          props.setInput(newTitle);
        }}
      />
    </div>
  );
}

function InputBox(props: {
  // title: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="ost_visual" style={{ flex: 1 }}>
      {/* <div style={{ textAlign: "left" }}>{props.title}</div> */}
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

export { DescriptionBox, InputBox };
