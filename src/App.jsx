

import React, { useEffect, useRef } from "react";
import './index.css'
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white' }}>
      <Navbar />
      <Section />
      {/* <Header /> */}
      <Footer />
    </div>
  )
}

export default App;




