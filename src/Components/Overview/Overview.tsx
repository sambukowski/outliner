import { useState } from "react";
import InputBox from "../Utils";
import StoryData from "./StoryData";

function Overview() {
  // TODO: move state out of here
  const [title, setTitle] = useState("Title");
  const [author, setAuthor] = useState("your name");
  const [synopsis, setSynopsis] = useState("Synopsis");

  return (
    <div>
      <h1>Overview</h1>
      <p>TODO: create Overview element</p>
      <InputBox title={"Title:"} input={title} setInput={setTitle} />
      <InputBox title={"Author:"} input={author} setInput={setAuthor} />
      <InputBox title={"Synopsis:"} input={synopsis} setInput={setSynopsis} />
      <StoryData />
    </div>
  );
}

export default Overview;
