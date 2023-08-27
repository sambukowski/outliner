import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../App.css";
import Overview from "./Overview/Overview";
import Characters from "./Characters";
import WorldBuilding from "./WorldBuilding";
import Plot from "./Plot";
import Outline from "./Outline";
import Timeline from "./Timeline";
import File from "./File";

function App() {
  return (
    <div className="App">
      <Tabs className="Tabs">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Characters</Tab>
          <Tab>World Building</Tab>
          <Tab>Plot</Tab>
          <Tab>Outline</Tab>
          <Tab>Timeline</Tab>
          <Tab>File</Tab>
        </TabList>
        <TabPanel>
          <Overview />
        </TabPanel>
        <TabPanel>
          <Characters />
        </TabPanel>
        <TabPanel>
          <WorldBuilding />
        </TabPanel>
        <TabPanel>
          <Plot />
        </TabPanel>
        <TabPanel>
          <Outline />
        </TabPanel>
        <TabPanel>
          <Timeline />
        </TabPanel>
        <TabPanel>
          <File />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
