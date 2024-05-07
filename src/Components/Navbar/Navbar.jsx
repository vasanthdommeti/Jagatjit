import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../Assests/LogoIcon.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div className="firstLogo">
                <Link to="/section" className="title">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <div className='headerNavBar'>
                {/* <div className={!menuOpen ? "mainNavDiv" : "close"}> */}
                <div className="mainNavDiv">
                <div class="navItem">
                        <h4>HOME</h4>
                    </div>
                    <div class="navItem">
                        <h4>ABOUT US</h4>
                    <div class="subItems">
                            <a href='/aboutUs/heritage'>HERITAGE</a>
                            <a href='/aboutUs/ourTeam'>OUR TEAM</a>
                            <a href='/aboutUs/values'>VALUES</a>
                            <a href='/aboutUs/press'>PRESS</a>
                        </div>
                    </div>
                <div class="navItem">
                        <h4>PRODUCTS</h4>
                        <div class="subItems">
                            <a href='/products/liquor'>LIQUOR
                                <div className="liquorSubItems">
                                    <Link to={'/products/liquor/ACpremiumOld'}>AC PREMIUM (OLD)</Link>
                                    <Link to='/products/liquor/ACpremiumNew'>AC PREMIUM (NEW)</Link>
                                    <a href='/linkpage'>AC BLACK</a>
                                    <a href='/linkpage'>ROYAL PRIDE</a>
                                    <a href='/linkpage'>DAMN GOOD SCOTCH</a>
                                    <a href='/linkpage'>IICE VODKA</a>
                                    <a href='/linkpage'>AC DRY GIN</a>
                                </div>
                            </a>
                            <div className='liquor'>
                                <Link to={'/products/mff'}>MFF</Link>
                                <Link to={'/products/ethnol'}>ETHNOL</Link>
                            </div>
                        </div>
                    </div>

                    <div class="secondLogo">
                        <Link to="/section"><img src={logo} alt='logo' /></Link>
                </div>
                <div class="navItem">
                        <h4>OUR PROCESS</h4>
                </div>
                <div class="navItem">
                    <h4>INVESTORS</h4>
                    <div class="subItems">
                            <a href='/investors/financial'>FINANCIAL</a>
                            <a href='/investors/reports'>REPORTS</a>
                            <a href='/investors/csr'>CSR</a>
                            <a href='/investors/codeOfCunduct'>CODE OF CUNDUCT</a>
                    </div>
                </div>
                <div class="navItem">
                        <h4>CONTACT US</h4>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;