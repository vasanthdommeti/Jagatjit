

import { Route, Routes } from "react-router-dom";

import './index.css'
// import { Malt } from "./Components/Pages/MaltProducts/Malt";
// import { Ethanol } from "./Components/Pages/MaltProducts/Ethanol";
// import { Values } from "./Components/Pages/Abouts/Values";
// import { AcBlack } from "./Components/Pages/AcBlack/AcBlack";
// import { RoyalPride } from "./Components/Pages/RoyalPride/RoyalPride";
// import { AcpremiumNew } from "./Components/Pages/AcpremiumNew/AcPremiumNew";
// import Acpremiumold from "./Components/Pages/AcPremiumOld/AcPremiumOld";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Values } from "./Components/AboutUs/Values/Values";
import { Ethanol } from "./Components/Products/Ethnol/Ethnol";
import { Malt } from "./Components/Products/Mff/Malt";
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white' }}>
      <Navbar />
      <div style={{ backgroundColor: 'transperent', color: 'white' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/products/liquor/ACpremiumOld" element={<Acpremiumold />} />
          <Route path="/products/liquor/ACpremiumNew" element={<AcpremiumNew />} />
          <Route path="/products/liquor/ACpremiumBlack" element={<AcBlack />} />
          <Route path="/products/liquor/RoyalPride" element={<RoyalPride />} /> */}
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




