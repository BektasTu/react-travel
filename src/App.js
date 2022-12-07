import React from "react";
import Activities from "./components/Activities";
import Background from "./components/Background";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <TopBar />
      <NavBar />
      <Background />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
