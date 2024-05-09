
import React from 'react';
import './Footer.css';
import logo from '../../Assets/LogoIcon.png'
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { GrPhone } from "react-icons/gr";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footerImage'>
                <img src={logo} alt='logo' />
            </div>
            <div className='footerSection'>
                <div className='footerBrand'>
                    <h3 className='logoHeaderName'>Jagatjit Industries Limited</h3>
                    <p className='logoPagraph'>Our company ethos since 1944 has rested on two pillars - one, the desire to provide true 'value for money' to both customers and stakeholders, and second, on 'quality' par excellence across the board.</p>
                </div>
                <div className='footerContactInfo'>
                    <div className='footerContact' >
                        <h1> CONTACT US</h1>
                        <div style={{ display: 'flex', flexDirection: 'row' }}><CiLocationOn className='icons' size={35} style={{ marginTop: '-6px' }} /><p className='contactParagraph'>Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India.</p></div>
                        <p className='contactParagraph'><FiMail className='icons' /> demomail.com</p>
                        <p className='contactParagraph'><GrPhone className='icons' /> Phone Number</p>
                    </div>
                    <div className='footerInfo'>
                        <h1>MORE INFO</h1>
                        <p className='contactParagraph'>Sustainability</p>
                        <p className='contactParagraph'>Press</p>
                        <p className='contactParagraph'>Global Presence</p>
                        <p className='contactParagraph'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='footerRights'>
                <p className='firstParagraphInFooterRights'>All rights reserved. All other trademarks and trade names are properties of their respective owners.</p>
                <p className='secondParagraphInFooterRights'>TO FIND OUT MORE ABOUT RESPONSIBLE CONSUMPTION</p>
                <p className='secondParagraphInFooterRights'>VISIT <a href='https://www.responsibility.org/' className='ancherTag'>RESPONSIBILITY.ORG</a> AND <a href='https://ourthinkingaboutdrinking.com/' className='ancherTag'>OURTHINKINGABOUTDRINKING.COM</a></p>
                <p className='thirdParagraphInFooterRights'>Please do not share or forward with anyone under the legal drinking age.</p>
            </div>
            <div className='footerCredits footerCreditsText'>
                <p className='allRightsparagraph'>All rights reserved. 2024. Designed by Webness</p>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}><span style={{ marginRight: 20 }}>Privacy Policy</span> <span style={{ marginLeft: 20 }}>Terms And Conditions</span></div>
            </div>
        </footer >
    );
}

export default Footer;