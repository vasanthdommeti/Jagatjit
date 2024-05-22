
import React from 'react';
import './Footer.css';
import logo from '../../Assets/LogoIcon.png'
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";
import { GrPhone } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Footer() {
    return ( 
        <footer className='footer' >
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
                        {/* <div style={{ display: 'flex', flexDirection: 'row' }}><CiLocationOn className='icons' size={35} style={{ marginTop: '-6px', marginLeft:'10px' }} /><p className='contactParagraph'> <a href="https://maps.app.goo.gl/LAcFgCDhUC7ajYTXA" >Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India.</a></p></div> */}
                       <div style={{display:'flex'}}>
                       <CiLocationOn className='mapicons' /><p className='contactParagraph'> <a href="https://maps.app.goo.gl/LAcFgCDhUC7ajYTXA" >Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India.</a></p>
                       </div>
                        <p className='contactParagraph'><FiMail className='icons' /> <a href="mailto:jil@jagatjit.com">jil@jagatjit.com</a></p>
                        <p className='contactParagraph'><GrPhone className='icons' /><a href="tel:0181-2783112">0181-2783112</a></p>
                    </div>
                    <div className='footerInfo'>
                        <h1>MORE INFO</h1>
                        <Link to={'/sustainability'} className='contactParagraph'><p>Sustainability</p></Link>
                        <Link to={'/aboutus/press'} className='contactParagraph'><p>Press</p></Link>
                        <Link to={'/globalpresence'} className='contactParagraph'><p>Global Presence</p></Link>
                        <Link to={'/contactus'} className='contactParagraph'><p>Contact Us</p></Link>
                    </div>
                </div> 
            </div>
            <div className='footerRights'>
                <p className='firstParagraphInFooterRights'>All rights reserved. All other trademarks and trade names are properties of their respective owners.</p>
                <p className='secondParagraphInFooterRights'>TO FIND OUT MORE ABOUT RESPONSIBLE CONSUMPTION</p>
                <p className='secondParagraphInFooterRights'>VISIT <a href='https://www.responsibility.org/' className='ancherTag'>RESPONSIBILITY.ORG</a></p>
                {/* AND <a href='https://ourthinkingaboutdrinking.com/' className='ancherTag'>OURTHINKINGABOUTDRINKING.COM</a> */}
                <p className='thirdParagraphInFooterRights'>Please do not share or forward with anyone under the legal drinking age.</p>
            </div>
            <div className='footerCredits footerCreditsText'>
                <p className='allRightsparagraph'>All rights reserved. 2024.</p>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}><Link to={'/privacypolicy'} style={{ marginRight: 20}}><span>Privacy Policy</span></Link>
                    {/* <Link to={'/Terms&Condition'} style={{ marginLeft: 20, textDecoration:'none', color:'white' }}>Terms And Conditions</Link> */}
                </div>
            </div>
        </footer >
    );
}

export default Footer;