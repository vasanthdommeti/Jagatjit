

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
import { Sustainability } from "./Components/Sustainability/Sustainability";
import { PrivacyPolicy } from "./Components/PrivacyPolicy/PrivacyPolicy";
import { Csr } from "./Components/Investors/Csr/Csr";
import { CodeOfCunduct } from "./Components/Investors/CodeOfCunduct/CodeOfCunduct";
import { Heritage } from "./Components/AboutUs/Heritage/Heritage";
import AcPremiumOld from "./Components/Products/Liquor/AcpremiumOld/AcpremiumOld";
import { DamnScotch } from "./Components/Products/Liquor/DamnScotch/DamnScotch";
function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/liquor/ACpremiumOld" element={<AcPremiumOld />} />
          <Route path="/products/liquor/ACpremiumBlack" element={<AcBlack />} />
          <Route path="/products/liquor/RoyalPride" element={<RoyalPride />} />
        <Route path="/products/liquor/DamnGoodScotch" element={<DamnScotch />} />
          <Route path="/products/mff" element={<Malt />} />
          <Route path="/products/ethnol" element={<Ethanol />} />
          <Route path="/aboutUs/values" element={<Values />} />
          <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/investors/csr" element={<Csr />} />
          <Route path="/investors/codeOfCunduct" element={<CodeOfCunduct />} />
          <Route path="/AboutUs/Heritage" element={<Heritage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;




