import React, { useState } from "react";
import { DescriptionBox, InputBox } from "./Utils";

import { DropDown, DropDownItem } from "./DropDown";
import "./General.css";

function PhysicalSetting(props: { name: string }) {
  const [description, setDescription] = useState("Write a description here");
  const [settingName, setSettingName] = useState("Setting Name");

  return (
    <div className="basic">
      {props.name}
      {/* TODO: this doesn't persist, it should */}
      <InputBox
        // title={"Setting"}
        input={settingName}
        setInput={setSettingName}
      />
      <DescriptionBox
        title={"Description:"}
        input={description}
        setInput={setDescription}
      />
    </div>
  );
}
// TODO: create a physical settings element
function PhysicalSettingsPanel() {
  return (
    <div>
      {/* TODO: add buttons to add/remove settings */}
      <h2>Physical Settings</h2>
      <PhysicalSetting name={"Setting 1"} />
      <PhysicalSetting name={"Setting 2"} />
    </div>
  );
}

function CulturalSetting(props: { name: string }) {
  const [description, setDescription] = useState("Write a description here");
  const [settingName, setSettingName] = useState("Setting Name");

  return (
    <div className="basic">
      {props.name}
      <InputBox
        // title={"Setting"}
        input={settingName}
        setInput={setSettingName}
      />
      <DescriptionBox
        title={"Description:"}
        input={description}
        setInput={setDescription}
      />
    </div>
  );
}
// TODO: create a cultural settings element
function CulturalSettings() {
  return (
    <div>
      {/* TODO: add buttons to add/remove settings */}
      <h2>Physical Settings</h2>
      <CulturalSetting name={"Setting 1"} />
    </div>
  );
}
// TODO: create a magic systems element
function MagicSystems() {
  return (
    <div>
      <h2>Magic Systems</h2>
    </div>
  );
}

function WorldBuilding() {
  const [page, setPage] = useState("physical");
  const activePageColor = "tomato";
  const inactivePageColor = "none";

  return (
    <div>
      <h1>World Building</h1>
      <p>TODO: create World Building element</p>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }} className="basic">
          {/* TODO: convert the buttons into drop downs that have a dynamic list 
          of all the settings that are in the list */}
          <button
            className="basic"
            style={{
              background:
                page === "physical" ? activePageColor : inactivePageColor,
            }}
            onClick={() => setPage("physical")}
          >
            Physical Settings
          </button>
          <button
            className="basic"
            style={{
              background:
                page === "cultural" ? activePageColor : inactivePageColor,
            }}
            onClick={() => setPage("cultural")}
          >
            Cultural Settings
          </button>
          <button
            className="basic"
            style={{
              background:
                page === "magic" ? activePageColor : inactivePageColor,
            }}
            onClick={() => setPage("magic")}
          >
            Magic Systems
          </button>
        </div>
        <div style={{ flex: 4 }} className="basic">
          {
            {
              physical: <PhysicalSettingsPanel />,
              cultural: <CulturalSettings />,
              magic: <MagicSystems />,
            }[page]
          }
        </div>
      </div>
    </div>
  );
}

export default WorldBuilding;
