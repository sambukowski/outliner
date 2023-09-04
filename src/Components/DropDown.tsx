import React, { useState } from "react";

function DropDownItem(props: { title: string }) {
  return <div>{props.title}</div>;
}

function Dropdown(props: { title: string; options: JSX.Element[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //   const [selectedValue, setSelectedValue] = useState<string>("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    // setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        style={{
          width: "100%",
          height: "5vh",
          fontSize: "3vh",
          backgroundColor: "tomato",
        }}
      >
        {props.title}
      </button>
      {isOpen && <ul>{props.options.map((option) => option)}</ul>}
    </div>
  );
}

export default Dropdown;
