
import React, { useState } from 'react';
import '../Navbar/Navbar.css'
import logo from '../../Assets/LogoIcon.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { MdClose } from "react-icons/md";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeNav = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <nav>
            <div className='mainNavDiv'>
                <div className="firstLogo">
                    <Link to="/" className="title">
                        <img src={logo} alt="logo" className='imagelogo' />
                    </Link>
                </div>
                <div className="menu" onClick={closeNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <ul className={menuOpen ? "open" : "close"}>
                    <li className='dropdown-li'>
                        <Link to={'/'} onClick={closeNav}>HOME</Link>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" className="dropdown-about" title="ABOUT US">
                            <Dropdown.Item as={Link} to="/aboutUs/heritage" onClick={closeNav}>
                                HERITAGE
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutUs/ourTeam" onClick={closeNav}>
                                OUR TEAM
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutUs/values" onClick={closeNav}>
                                VALUES
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutUs/press" onClick={closeNav}>
                                PRESS
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" drop='down' className="dropdown-about" title="PRODUCTS">
                            <DropdownButton id="dropdown-basic-button" drop='left' className="dropdown-about" title="LIQUOR">
                                <Dropdown.Item as={Link} to="/products/liquor/ACpremiumOld" onClick={closeNav}>
                                    AC PREMIUM (OLD)
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/ACpremiumNew" onClick={closeNav}>
                                    AC PREMIUM (NEW)
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/ACpremiumBlack" onClick={closeNav}>
                                    AC BLACK
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/RoyalPride" onClick={closeNav}>
                                    ROYAL PRIDE
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/DamnGoodScotch" onClick={closeNav}>
                                    DAMN GOOD SCOTCH
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/IiceVodka" onClick={closeNav}>
                                    IICE VODKA
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/AcDryGin" onClick={closeNav}>
                                    AC DRY GIN
                                </Dropdown.Item>
                            </DropdownButton>
                            <Dropdown.Item as={Link} to="/products/mff" onClick={closeNav}>
                                MFF
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/products/ethnol" onClick={closeNav}>
                                ETHNOL
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="secondLogo">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className='dropdown-li'>
                        <Link to="/our-Process" onClick={closeNav}>
                            OUR PROCESS
                        </Link>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" className="dropdown-about" title="INVESTORS">
                            <Dropdown.Item as={Link} to="/investors/financial" onClick={closeNav}>
                                FINANCIAL
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/investors/reports" onClick={closeNav}>
                                REPORTS
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/investors/csr" onClick={closeNav}>
                                CSR
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/investors/codeOfCunduct" onClick={closeNav}>
                                CODE OF CUNDUCT
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className='dropdown-li'>
                        <Link to="/contact-us" onClick={closeNav}>CONTACT US</Link>
                    </li>
                </ul>
                <div className="menu" style={{zIndex:2, marginRight:'7%'}} id="nav-close" onClick={closeNav}>
                    {menuOpen &&<IoClose fontSize={75}/>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
