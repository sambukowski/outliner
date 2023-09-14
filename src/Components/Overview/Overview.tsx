import { useState } from "react";
import { DescriptionBox } from "../Utils";
import StoryData from "./StoryData";

function Overview() {
  // TODO: move state out of here
  const [title, setTitle] = useState("Title");
  const [author, setAuthor] = useState("Your name");
  const [synopsis, setSynopsis] = useState("Synopsis");

  return (
    <div>
      <h1>Overview</h1>
      <p>TODO: create Overview element</p>
      <DescriptionBox title={"Title:"} input={title} setInput={setTitle} />
      <DescriptionBox title={"Author:"} input={author} setInput={setAuthor} />
      <DescriptionBox
        title={"Synopsis:"}
        input={synopsis}
        setInput={setSynopsis}
      />
      <StoryData />
    </div>
  );
}

export default Overview;
