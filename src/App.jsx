

import { Route, Routes } from "react-router-dom";

import './index.css'
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Values } from "./Components/AboutUs/Values/Values";
import { Ethanol } from "./Components/Products/Ethnol/Ethnol";
import { Malt } from "./Components/Products/Mff/Malt";
import { RoyalPride } from "./Components/Products/Liquor/RoyalPride/RoyalPride";
import { AcBlack } from "./Components/Products/Liquor/AcBlack/AcBlack";
import { AcpremiumOld } from "./Components/Products/Liquor/AcpremiumOld/AcpremiumOld";
import { AcPremiumNew } from "./Components/Products/Liquor/AcpremiumNew/AcpremiumNew";
function App() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', width:'100%' }}>
      <Navbar />
      <div style={{ backgroundColor: 'transperent', color: 'white' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/liquor/ACpremiumOld" element={<AcpremiumOld />} />
          <Route path="/products/liquor/ACpremiumNew" element={<AcPremiumNew />} />
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




