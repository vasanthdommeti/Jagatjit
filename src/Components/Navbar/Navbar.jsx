import React from 'react';
import './Navbar.css'
import logo from '../../Assests/LogoIcon.png'
function Navbar() {
    return (
        <div className='headerNavBar'>
            <div class="mainNavDiv">
                <div class="navItem">
                    <h4>HOME</h4>
                    {/* <!-- Sub-items --> */}
                    <div class="subItems">
                        <a href='/linkpage'>Sub-item 1</a>
                        <a href='/linkpage'>Sub-item 2</a>
                    </div>
                </div>
                <div class="navItem">
                    <h4>ABOUT US</h4>
                    <div class="subItems">
                        <a href='/linkpage'>Our Team</a>
                        <a href='/linkpage'>Our History</a>
                    </div>
                </div>
                <div class="navItem">
                    <h4>PRODUCTS</h4>
                    <div class="subItems">
                        <a href='/linkpage'>Product A</a>
                        <a href='/linkpage'>Product B</a>
                    </div>
                </div>

                <div class="navItem">
                    <img src={logo} alt='logo' />
                    {/* <h4>ICONS ICONS</h4>
                    <div class="subItems">
                        <a href='/linkpage'>Icon Set 1</a>
                        <a href='/linkpage'>Icon Set 2</a>
                    </div> */}
                </div>
                <div class="navItem">
                    <h4>OUR PROCESS</h4>
                    <div class="subItems">
                        <a href='/linkpage'>Methodology</a>
                        <a href='/linkpage'>Tools</a>
                    </div>
                </div>
                <div class="navItem">
                    <h4>INVESTORS</h4>
                    <div class="subItems">
                        <a href='/linkpage'>Reports</a>
                        <a href='/linkpage'>Projections</a>
                    </div>
                </div>
                <div class="navItem">
                    <h4>CONTACT US</h4>
                    <div class="subItems">
                        <a href='/linkpage'>Email</a>
                        <a href='/linkpage'>Phone</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;