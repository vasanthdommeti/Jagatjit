

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './index.css';
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
import DateOfBirth from "./Components/DateOfBirth/DateOfBirth";
import { Loading } from "./Components/Loading/Loading";
function App() {

  const {pathname} = useLocation()
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [previousPathname, setPreviousPathname] = useState('');
  const navitage = useNavigate();


  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  const scrollStop = (e) => {
    document.body.style.overflow = e ? 'hidden' : 'auto';
  }

  useEffect(() => {
    try {
      const data = localStorage.getItem("date");
      const dates = JSON.parse(data)
      if(dates?.day != '' && dates?.month != '' && dates?.year != ''){
          navitage(pathname)
      }
      else{
        navitage('/')
      }
  } catch (error) {
      console.error("Error parsing data from localStorage:", error);
  }

    if (pathname !== previousPathname) {
      setLoading(true);
      setPreviousPathname(pathname);
  }
  
  if (pathname) {
      setTimeout(() => {
          setLoading(false);
      }, 1000);
  }
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
    
  }, [lastScrollY,pathname]);


  return (
    <>
      {pathname !==  '/' && !loading  && <Navbar show={show} scrollStop={scrollStop}/>}
      {loading ?
      <Loading/>
      :
      <Routes>
        {/* Single routes */}
        <Route exact path="/" element={<DateOfBirth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/globalpresence" element={<GlobalPresence />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/ourprocess" element={<OurProcess />} />

        {/* Products routes */}
        <Route path="/products/liquor/acpremiumold" element={<AcpremiumOld />} />
        <Route path="/products/liquor/acpremium" element={<AcpremiumNew />} />
        <Route path="/products/liquor/acpremiumblack" element={<AcBlack />} />
        <Route path="/products/liquor/royalpride" element={<RoyalPride />} />
        <Route path="/products/liquor/damngoodscotch" element={<DamnScotch />} />
        <Route path="/products/liquor/acdrygin" element={<AcDryGin />} />
        <Route path="/products/liquor/royalmedallion" element={<RoyalMedallion />} />
        <Route path="/products/liquor/iicevodka" element={<IceVodka />} />
        <Route path="/products/mmf/foodproducts" element={<FoodProducts />} />
        <Route path="/products/mmf/maltextract" element={<MaltExtract />} />
        <Route path="/products/ethnol" element={<Ethanol />} />

        {/* Investors routes */}
        <Route path="/investors/reports" element={<Report />} />
        <Route path="/investors/financial" element={<Financial />} />
        <Route path="/investors/csr" element={<Csr />} />
        <Route path="/investors/codeofconduct" element={<CodeOfCunduct />} />

        {/* About us routes */}
        <Route path="/aboutus/ourteam" element={<OurTeam />} />
        <Route path="/aboutus/heritage" element={<Heritage />} />
        <Route path="/aboutus/values" element={<Values />} />
        <Route path="/aboutus/press" element={<Press />} />

        {/* Error route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>}
      {(pathname !==  '/'  && pathname !==  '/home') && !loading  && <Footer /> }
    </>
  )
}

export default App;

