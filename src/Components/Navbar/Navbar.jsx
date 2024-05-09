
import React, { useState } from 'react';
import '../Navbar/Navbar.css'
import logo from '../../Assets/LogoIcon.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div className='mainNavDiv'>
                <div className="firstLogo">
                    <Link to="/" className="title">
                        <img src={logo} alt="logo" className='imagelogo' />
                    </Link>
                </div>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <ul className={menuOpen ? "open" : "close"}>
                    <li className='dropdown-li'>
                        <Link to={'/'}>HOME</Link>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" className="dropdown-about" title="ABOUT US">
                            <Dropdown.Item as={Link} to="/aboutUs/heritage">HERITAGE</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutUs/ourTeam">OUR TEAM</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutUs/values">VALUES</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutUs/press">PRESS</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" drop='down' className="dropdown-about" title="PRODUCTS">
                            <DropdownButton id="dropdown-basic-button" drop='left' className="dropdown-about" title="LIQUOR">
                                <Dropdown.Item as={Link} to="/products/liquor/ACpremiumOld">AC PREMIUM (OLD)</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/ACpremiumNew">AC PREMIUM (NEW)</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/ACpremiumBlack">AC BLACK</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/RoyalPride">ROYAL PRIDE</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/DamnGoodScotch">DAMN GOOD SCOTCH</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/IiceVodka">IICE VODKA</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/AcDryGin">AC DRY GIN</Dropdown.Item>
                            </DropdownButton>
                            <Dropdown.Item as={Link} to="/products/mff">MFF</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/products/ethnol">ETHNOL</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="secondLogo">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className='dropdown-li'>
                        <Link to="/" >OUR PROCESS</Link>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" className="dropdown-about" title="INVESTORS">
                            <Dropdown.Item as={Link} to="/investors/financial">FINANCIAL</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/investors/reports">REPORTS</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/investors/csr">CSR</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/investors/codeOfCunduct">CODE OF CUNDUCT</Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className='dropdown-li'>
                        <Link to="/" >CONTACT US</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;
