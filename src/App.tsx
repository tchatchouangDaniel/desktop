import { useState } from "react";
import AppContainer from "./apps/AppContainer";
import Taskbar from "./components/Taskbar";
import "./styles/_main.scss";
function App() {

  return (
    <div className="App">
      <AppContainer />
      <Taskbar />
    </div>
  );
}

export default App;
