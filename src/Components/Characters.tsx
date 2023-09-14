import React, { useState } from "react";

import "../App.css";
import { DropDown, DropDownItem } from "./DropDown";
import { DescriptionBox } from "./Utils";

function MainCharacter(props: { name: string }) {
  // TODO: turn this into a button and passes the correct character into the CharacterPanel for editing
  const [name, setName] = useState(props.name);
  return <DescriptionBox title={"Title:"} input={name} setInput={setName} />;
}

function CharacterPanel(props: { name: string }) {
  const [description, setDescription] = useState("Write a description here");

  return (
    <div
      style={{ borderWidth: "3px", borderColor: "black", borderStyle: "solid" }}
    >
      <h1>{props.name}</h1>
      <p>TODO: create CharacterPanel element</p>
      <h2>Character Description</h2>
      <DescriptionBox
        title={"Character Description:"}
        input={description}
        setInput={setDescription}
      />
      {/* TODO: convert this to it's own element */}
      <div
        style={{
          borderWidth: "3px",
          borderColor: "black",
          margin: "1vh",
          borderStyle: "solid",
        }}
      >
        <h2>promises / payoffs (character specific)</h2>
        <li>{"promise 1 -> payoff 1"}</li>
        <li>{"promise 2 -> payoff 2"}</li>
      </div>
      <div
        style={{
          borderWidth: "3px",
          borderColor: "black",
          borderStyle: "solid",
          display: "flex",
          margin: "1vh",
        }}
      >
        {/* TODO: convert this to it's own element */}
        <div
          style={{
            flex: 1,
            borderWidth: "3px",
            borderColor: "black",
            margin: "1vh",
            borderStyle: "solid",
          }}
        >
          <h3>Plot Architype 1</h3>
          <li>bullet 1</li>
          <li>bullet 2</li>
          <li>bullet 3</li>
          <li>bullet 4</li>
          <li>bullet 5</li>
          <li>bullet 6</li>
          <li>bullet 7</li>
          <li>bullet 8</li>
          <li>bullet 9</li>
          <li>bullet 10</li>
        </div>
        {/* TODO: convert this to it's own element */}
        <div
          style={{
            flex: 1,
            borderWidth: "3px",
            borderColor: "black",
            margin: "1vh",
            borderStyle: "solid",
          }}
        >
          <h3>Plot Architype 2</h3>
          <li>bullet 1</li>
          <li>bullet 2</li>
          <li>bullet 3</li>
          <li>bullet 4</li>
          <li>bullet 5</li>
          <li>bullet 6</li>
          <li>bullet 7</li>
          <li>bullet 8</li>
          <li>bullet 9</li>
          <li>bullet 10</li>
        </div>
      </div>
    </div>
  );
}

function Characters() {
  const [name, setName] = useState("Luke");

  // TODO: the changed names don't persist, need to figure out a clean way to move the state up
  const main_characters: JSX.Element[] = [
    <MainCharacter name={"Luke"} />,
    <MainCharacter name={"Leia"} />,
    <MainCharacter name={"Han"} />,
  ];

  const secondary_characters: JSX.Element[] = [
    <DropDownItem title="Chewy" />,
    <DropDownItem title="R2D2" />,
    <DropDownItem title="C3PO" />,
  ];

  const minor_characters: JSX.Element[] = [
    <DropDownItem title="Storm Strooper" />,
    <DropDownItem title="Random Driod" />,
    <DropDownItem title="Rebel" />,
  ];

  return (
    <div>
      <h1>Characters</h1>
      <p>TODO: create Characters element</p>
      <div style={{ display: "flex" }}>
        {" "}
        <div style={{ flex: 1 }}>
          <DropDown title={"Main Characters"} options={main_characters} />
          <DropDown
            title={"Secondary Characters"}
            options={secondary_characters}
          />
          <DropDown title={"Minor Characters"} options={minor_characters} />
        </div>
        <div style={{ flex: 4 }}>
          <CharacterPanel name={"Just something"} />
        </div>
      </div>
    </div>
  );
}

export default Characters;
