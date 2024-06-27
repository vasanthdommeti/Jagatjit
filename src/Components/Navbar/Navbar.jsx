
import React, { useEffect, useState } from 'react';
import '../Navbar/Navbar.css'
import logo from '../../Assets/LogoIcon.png'
// import Dropdown from 'react-bootstrap/Dropdown';
// import { MdClose } from "react-icons/md";
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Navbar({ show, scrollStop }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const responsive = document.documentElement.clientWidth
    useEffect(() => {
        console.log('document.documentElement.clientWidth',window.innerWidth);
        responsive > 768 && setMenuOpen(false)
    },[])

    const closeNav = () => {
        setMenuOpen(!menuOpen)
        scrollStop(!menuOpen)
    };

    return (
        <nav style={{display:show ? 'flex' :'none'}}>
            <div className="firstLogo">
                <Link to="/home" className="title">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="menu" onClick={closeNav}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='headerNavBar'>
                <div className={menuOpen ? "open" : "mainNavDiv"}>
                    <div class="navItem">
                    <Link to={'/home'} onClick={closeNav} className='linkText'>HOME</Link>
                    </div>
                    <div class="navItem">
                        <h4>ABOUT US</h4>
                        <div class="subItems">
                            <Link to="/aboutus/heritage">HERITAGE</Link>
                            <Link to="/aboutus/ourteam">OUR TEAM</Link>
                            <Link to='/aboutUs/values'>VALUES</Link>
                            <Link to="/aboutus/press">PRESS</Link>
                        </div>
                    </div>
                    <div className="navItem1">
                        <h4>PRODUCTS</h4> 
                        <div className="subItems1">
                            <div className="menu-link2"><h5>LIQUOR</h5>
                                <div className="liquorSubItems1">
                                    <Link to="/products/liquor/acpremiumold" >AC PREMIUM (OLD)</Link>
                                    <Link to="/products/liquor/acpremium">AC PREMIUM</Link>
                                    <Link to="/products/liquor/acpremiumblack">AC BLACK</Link>
                                    <Link to="/products/liquor/royalpride">ROYAL PRIDE</Link>
                                    <Link to="/products/liquor/damngoodscotch">DAMN GOOD SCOTCH</Link>
                                    <Link to="/products/liquor/iicevodka">IICE VODKA</Link>
                                    <Link to="/products/liquor/acdrygin">AC DRY GIN</Link>
                                    <Link to="/products/liquor/royalmedallion">ROYAL MEDALLION</Link>
                                </div>
                            </div>
                            <div className='navItem2'>
                                <div className="subItem2">
                                    <div className="menu-link"><h5>MMF</h5>
                                        <div className="liquorSubItems2">
                                            <Link to="/products/mmf/foodproducts" >FOOD PRODUCTS</Link>
                                            <Link to='/products/mmf/maltextract'>MALT EXTRACT</Link>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/products/ethnol" >ETHNOL</Link>
                            </div>
                        </div>
                    </div>


                    <div class="secondLogo">
                        <img src={logo} alt='logo' />
                    </div>
                    <div class="navItem">
                    <Link to="/ourprocess" className='linkText' onClick={closeNav}>
                            OUR PROCESS
                        </Link>
                    </div>
                    <div class="navItem">
                        <h4>INVESTORS</h4>
                        <div class="subItems">
                            <Link to="/investors/financial">FINANCIAL</Link>
                            <Link to="/investors/reports">REPORTS</Link>
                            <Link to="/investors/csr" >CSR</Link>
                            <Link to="/investors/codeofconduct">CODE OF CUNDUCT</Link>
                        </div>
                    </div>
                    <div class="navItem">
                    <Link to="/contactus" className='linkText' onClick={closeNav}>CONTACT US</Link>
                    </div>
                </div>
                <div className="menu" style={{zIndex:2, marginRight:'7%'}} id="nav-close" onClick={closeNav}>
                    {menuOpen &&<IoClose fontSize={75}/>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
