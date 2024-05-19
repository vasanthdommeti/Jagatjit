



import React from "react";
import "../AcpremiumNew/AcpremiumNew.css";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import curtainImg from '../../../../Assets/Products/Liquor/AcpremiumOld/sectionCurtain.png';
import flavourImgs from '../../../../Assets/Products/Liquor/AcpremiumNew/bottleimgsec.png';
import flavourGroupimg from '../../../../Assets/Products/Liquor/AcpremiumNew/groupimgfav.png';
import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottle.svg';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.svg';
import glass from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.svg';
import acpsectiononelogo from '../../../../Assets/Products/Liquor/AcpremiumNew/acpsectiononelogo.png';
import acpsectiontwoimg from '../../../../Assets/Products/Liquor/AcpremiumNew/acpremiumsecBottleImg.png';
import acpblack from '../../../../Assets/Products/Liquor/AcpremiumNew/acblackImg.png';
import acpnewImg from '../../../../Assets/Products/Liquor/AcpremiumNew/acpnewImg.png';
import acplast from '../../../../Assets/Products/Liquor/AcpremiumNew/AcpProducts.png';
 
export const AcpremiumNew = () => {
    return (
        <div>
            {/* //1 */}
            <div className="acpSecondPageSectionOneImage">
                <div className="acpNewTextDiv">
                    <h2 className="aristocratSecondHeading">New Bottle. Same Brilliant Taste</h2>
                    <img src={acpsectiononelogo} alt="bottleImg" style={{ height: '40%', width: '50%', marginLeft: '-5%' }} />
                    <p className="aristocratParagraph">One of India's most-loved whiskey brands with its iconic gold and deep-red bottle. Now Revamped. </p>
                </div>
            </div>
            {/* //2 */}
            <div className="pagesTextDivTwo acpScondSectionTwoImage">
                <img src={acpsectiontwoimg} alt="bottleImg" style={{ height: '100vh', width: '50%' }} />
                <div className="pagesTextDiv">
                    <div className="pageSecondText">
                        <h1 className="sectionTwoHeading">THE ESSENCE OF</h1>
                        <h1 className="sectionTwoHeading">SOPHISTICATION</h1>
                    </div>
                    <div>
                        <p className="sectionTwoParagraph">Distinctive and refined in both taste and look, it is</p>
                        <p className="sectionTwoParagraph">blended with pure grain and select imported</p>
                        <p className="sectionTwoParagraph">Scotch malts, bringing a <span>honeyed and delightful</span></p>
                        <p className="sectionTwoParagraph"><span>experince</span> to its loyal patrons</p>
                    </div>
                </div>
            </div>
            {/* //3 */}
            <section className="sectionThree">
                <div><img src={curtainImg} alt="leftCurtain" className="image" /></div>
                <div className="flavourDiv">
                    <h1 className="flavourDivHeader">FLAVOUR PROFILE</h1>
                    <div style={{ display: 'flex', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                    <div class="profileN-icon-wrap">
                    <div class="profileN-icon-1">Elegant and Long Lasting</div>
                    <div class="profileN-icon-2">Sweet, Floral with a touch of spices</div>
                    <div class="profileN-icon-3">Deep Gold to the eyes</div>
                    <div class="profileN-icon-4">Smooth, with a hint of Fruit & Spices</div>
                </div>
                
                        {/* <img src={flavourImgs} alt="flavours" style={{ width: '70%', height: '90%' }} /> */}
                        <img src={flavourGroupimg} alt="groupBtl" style={{ width: '70%', height: '90%' }} />

                    </div>
                </div>
                <div><img src={curtainImg} alt="rightCurtain" className="curtainImage image" /></div>
            </section>
            {/* //4 */}
            <section className="acpoldsecondfourthSectionImage">
                <div className="acpoldpagesTextbetween">
                    <h2 className="pagesTextFavorDivHeader">BEYOND LUXURY LIES LEGACY.</h2>
                </div>
                <div className="rowIconVisible">
                    <div className="imageText">
                        <img src={glass} alt="bottleImg" className="acpnewlogoText" />
                        <div>
                            <p className="logoTextParagraph">Best Enjoyed How You</p>
                            <p className="logoTextParagraph">Like Your Scotch</p>
                        </div>
                    </div>
                    <div className="imageText">
                        <img src={bottle} alt="bottleImg" className="acpnewlogoText" />
                        <div>
                            <p className="logoTextParagraph">Best Enjoyed How You</p>
                            <p className="logoTextParagraph">Like Your Scotch</p>
                        </div>
                    </div>
                    <div className="imageText">
                        <img src={distik} alt="bottleImg" className="acpnewlogoText" />
                        <div>
                            <p className="logoTextParagraph">Best Enjoyed How You</p>
                            <p className="logoTextParagraph">Like Your Scotch</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* //5 */}
            <div className="acppremiumfifthhDiv">
                <div style={{ justifyContent: 'center', display: 'flex', height: '50%', marginTop: '5%' }}>
                    <img src={acplast} alt="lastImg" />
                </div>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', marginTop: '5%' }}>
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumleftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="acppremiumarrowHeading">Aristocrat Premium (OLD)</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={acpnewImg} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/RoyalMedallion'} className="acppremiumrightArrowDiv">
                        <div>
                            <img src={acpblack} alt="block" style={{ height: '150px', marginRight: '5px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="acppremiumarrowHeading">Aristocrat Black</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

