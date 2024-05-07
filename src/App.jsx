

import { Route, Routes } from "react-router-dom";

import './index.css'
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { About, Contact, Home, Services } from "../src/Components/Pages";
import Acpremiumold from '../src/Components/Pages/AcPremiumOld'
import { AcpremiumNew } from "./Components/Pages/AcPremiumNew";
import { Malt } from "./Components/Pages/MaltProducts/Malt";
import { Ethanol } from "./Components/Pages/MaltProducts/Ethanol";
import { Values } from "./Components/Pages/Abouts/Values";
import { AcBlack } from "./Components/Pages/AcBlack/AcBlack";
import { RoyalPride } from "./Components/Pages/RoyalPride/RoyalPride";
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white' }}>
      <Navbar />
      {/* <Section />
      <Header />
      <Footer /> */}
      <div style={{ backgroundColor: 'transperent', color: 'white' }}>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/section" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/liquor/ACpremiumOld" element={<Acpremiumold />} />
          <Route path="/products/liquor/ACpremiumNew" element={<AcpremiumNew />} />
          <Route path="/products/liquor/ACpremiumBlack" element={<AcBlack />} />
          <Route path="/products/liquor/RoyalPride" element={<RoyalPride />} />
          <Route path="/products/mff" element={<Malt />} />
          <Route path="/products/ethnol" element={<Ethanol />} />
          <Route path="/aboutUs/values" element={<Values />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;




