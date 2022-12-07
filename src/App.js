import React from "react";
import Activities from "./components/Activities";
import Background from "./components/Background";
import Booking from "./components/Booking";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Background />
      <Activities />
      <Booking />
    </div>
  );
}

export default App;
