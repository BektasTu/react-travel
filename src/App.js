import React from "react";
import Activities from "./components/Activities";
import Background from "./components/Background";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Background />
      <Activities />
    </div>
  );
}

export default App;
