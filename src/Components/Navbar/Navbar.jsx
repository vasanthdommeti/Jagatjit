
import React, { useEffect, useState } from 'react';
import '../Navbar/Navbar.css'
import logo from '../../Assets/LogoIcon.png'
import Dropdown from 'react-bootstrap/Dropdown';
import { MdClose } from "react-icons/md";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
function Navbar({ show }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false)
    }, [])

    const closeNav = () => {
        setMenuOpen(!menuOpen)
    };

    return (
        <nav style={{ display: show ? 'flex' : 'none' }}>
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
                <div className='navmainDiv'>
                <ul className={menuOpen ? "open" : "close"}>
                    <li className='dropdown-li'>
                        <Link to={'/home'} onClick={closeNav}>HOME</Link>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" className="dropdown-about borderChange" title="ABOUT US">
                            <Dropdown.Item as={Link} to="/aboutus/heritage" onClick={closeNav}>
                                HERITAGE
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutus/ourteam" onClick={closeNav}>
                                OUR TEAM
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutus/values" onClick={closeNav}>
                                VALUES
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutus/press" onClick={closeNav}>
                                PRESS
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li>
                        <DropdownButton id="dropdown-basic-button" drop='down' className="dropdown-about" title="PRODUCTS">
                            <DropdownButton id="dropdown-basic-button" drop='left' className="dropdown-liquor dropdown-about" title="LIQUOR">
                                <Dropdown.Item as={Link} to="/products/liquor/acpremiumold" onClick={closeNav}>
                                    AC PREMIUM (OLD)
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/acpremium" onClick={closeNav}>
                                    AC PREMIUM
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/acpremiumblack" onClick={closeNav}>
                                    AC BLACK
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/royalpride" onClick={closeNav}>
                                    ROYAL PRIDE
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/damngoodscotch" onClick={closeNav}>
                                    DAMN GOOD SCOTCH
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/iicevodka" onClick={closeNav}>
                                    IICE VODKA
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/acdrygin" onClick={closeNav}>
                                    AC DRY GIN
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/liquor/royalmedallion" onClick={closeNav}>
                                    ROYAL MEDALLION
                                </Dropdown.Item>
                            </DropdownButton> 
                            {/* <Dropdown.Item as={Link} to="/products/mff" onClick={closeNav}>
                                MFF
                            </Dropdown.Item> */}
                            <DropdownButton id="dropdown-basic-button" className="dropdown-liquor dropdown-about" title="MMF">
                                <Dropdown.Item as={Link} to="/products/mmf/foodproducts" onClick={closeNav}>
                                    FOOD PRODUCTS
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/products/mmf/maltextract" onClick={closeNav}>
                                    MALT EXTRACT
                                </Dropdown.Item>
                            </DropdownButton>
                            <Dropdown.Item as={Link} to="/products/ethnol" onClick={closeNav}>
                                ETHNOL
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className="secondLogo">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className='dropdown-li'>
                        <Link to="/ourprocess" onClick={closeNav}>
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
                            <Dropdown.Item as={Link} to="/investors/codeofconduct" onClick={closeNav}>
                                CODE OF CONDUCT
                            </Dropdown.Item>
                        </DropdownButton>
                    </li>
                    <li className='dropdown-li'>
                        <Link to="/contactus" onClick={closeNav}>CONTACT US</Link>
                    </li>
                </ul>
                </div>
                <div className="menu" style={{ zIndex: 2, marginRight: '7%' }} id="nav-close" onClick={closeNav}>
                    {menuOpen && <IoClose fontSize={75} />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
