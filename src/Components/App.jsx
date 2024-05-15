

import { Route, Routes } from "react-router-dom";


import './index.css'
import './fonts/JosefinSans-Light.ttf';
import './fonts/JosefinSans-Regular.ttf';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { Values } from "./Components/AboutUs/Values/Values";
import { Ethanol } from "./Components/Products/Ethnol/Ethnol";
import { RoyalPride } from "./Components/Products/Liquor/RoyalPride/RoyalPride";
import { AcBlack } from "./Components/Products/Liquor/AcBlack/AcBlack";
import { Sustainability } from "./Components/Sustainability/Sustainability";
import { PrivacyPolicy } from "./Components/PrivacyPolicy/PrivacyPolicy";
import { Csr } from "./Components/Investors/Csr/Csr";
import { CodeOfCunduct } from "./Components/Investors/CodeOfCunduct/CodeOfCunduct";
import { Heritage } from "./Components/AboutUs/Heritage/Heritage";
import { DamnScotch } from "./Components/Products/Liquor/DamnScotch/DamnScotch";
import { AcDryGin } from "./Components/Products/Liquor/AcDryGin/AcDryGin";
import { RoyalMedallion } from "./Components/Products/Liquor/RoyalMedallion/RoyalMedallion";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { OurProcess } from "./Components/OurProcess/OurProcess";
import { FoodProducts } from "./Components/Products/Mmf/FoodProducts/FoodProducts";
import { MaltExtract } from "./Components/Products/Mmf/MaltExtract/MaltExtract";
import { AcpremiumNew } from "./Components/Products/Liquor/AcpremiumNew/AcpremiumNew";
import { AcpremiumOld } from "./Components/Products/Liquor/AcpremiumOld/AcpremiumOld";
import { IceVodka } from "./Components/Products/Liquor/IceVodka/IceVodka";
import { GlobalPresence } from "./Components/GlobalPresence/GlobalPresence";
import ContactUs from "./Components/ContactUs/ContactUs";
import Report from "./Components/Investors/Reports/Reports";
import Financial from "./Components/Investors/Financial/Financial";
import Press from "./Components/AboutUs/Press/Press";
import OurTeam from "./Components/AboutUs/OurTeam/OurTeam";
function App() {
  return (
    <> 
      <Navbar />
      {/* <AcpremiumNew/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/liquor/ACpremiumOld" element={<AcpremiumOld />} />
          <Route path="/products/liquor/ACpremiumNew" element={<AcpremiumNew />} />
          <Route path="/products/liquor/ACpremiumBlack" element={<AcBlack />} />
          <Route path="/products/liquor/RoyalPride" element={<RoyalPride />} />
          <Route path="/products/liquor/DamnGoodScotch" element={<DamnScotch />} />
          <Route path="/products/liquor/AcDryGin" element={<AcDryGin />} />
          <Route path="/products/liquor/RoyalMedallion" element={<RoyalMedallion />} />
          <Route path="/products/liquor/IiceVodka" element={<IceVodka />} />
          <Route path="/products/mmf/food-products" element={<FoodProducts />} />
          <Route path="/products/mmf/malt-extract" element={<MaltExtract />} />
          <Route path="/products/ethnol" element={<Ethanol />} />
          <Route path="/aboutUs/values" element={<Values />} />
          <Route path="/Sustainability" element={<Sustainability />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/GlobalPresence" element={<GlobalPresence />} />
          <Route path="/investors/csr" element={<Csr />} />
          <Route path="/investors/codeOfCunduct" element={<CodeOfCunduct />} />
          <Route path="/AboutUs/Heritage" element={<Heritage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/investors/reports" element={<Report />} />
          <Route path="/investors/financial" element={<Financial />} />
          <Route path="/aboutUs/OurTeam" element={<OurTeam />} />
          <Route path="/aboutUs/Press" element={<Press />} />
          <Route path="/our-Process" element={<OurProcess />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App;




