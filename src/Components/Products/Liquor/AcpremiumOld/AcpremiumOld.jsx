





import React from "react";
import "../AcpremiumOld/AcpremiumOld.css";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import curtainImg from '../../../../Assets/Products/Liquor/AcpremiumOld/sectionCurtain.png';
import flavourImg from '../../../../Assets/Products/Liquor/AcpremiumOld/sectionFlavours.png';
import flavourGroup from '../../../../Assets/Products/Liquor/AcpremiumOld/flavourGroup.png'
import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottle.svg';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.svg';
import glass from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.svg';
import acpsectiononelogo from '../../../../Assets/Products/Liquor/AcpremiumNew/acpsectiononelogo.png';
import acpsectiontwoimgs from '../../../../Assets/Products/Liquor/AcpremiumOld/sec1bottle.png';
import acpblack from '../../../../Assets/Products/Liquor/AcpremiumNew/acblackImg.png';
import acpnewImg from '../../../../Assets/Products/Liquor/AcpremiumNew/acpnewImg.png';
import acplast from '../../../../Assets/Products/Liquor/AcpremiumNew/acplastImg.png';

export const AcpremiumOld = () => {
    return (
        <div>
            {/* //1 */}
            <div className="acpoldpagesRowDiv acpoldSecondPageSectionOneImage">
                <div className="acpsecDiv">
                    <img src={acpsectiononelogo} alt="bottleImg" className="bottleImgLogo" />
                    <h2 className="acpoldSecondHeading">CLASSIC WHISKEY</h2>
                    <p className="acpoldParagraph">One of India's most-loved whiskey brands with</p>
                    <p className="acpoldParagraph">its iconic gold and deep-red bottle.</p>
                </div>
            <img src={acpsectiontwoimgs} alt="bottleImg" className="bottleImg" />
            </div>
            {/* //2 */}
            <div className="pagesTextDivTwo acpScondSectionTwoImage">
            <img src={acplast} alt="bottleImg" className="section2BotleImg" />
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
                    <img src={flavourGroup} alt="groupBtl" className="image favBotGroupImg" />
                    {/* <img src={flavourImg} alt="flavours" className="image" /> */}
                    <div class="profile-icon-wrap">
                    <div class="profile-icon-1">Elegant and Long Lasting</div>
                    <div class="profile-icon-2">Sweet, Floral with a touch of spices</div>
                    <div class="profile-icon-3">Deep Gold to the eyes</div>
                    <div class="profile-icon-4">Smooth, with a hint of Fruit & Spices</div>
                </div>
                </div>
                <div><img src={curtainImg} alt="rightCurtain" className="curtainImage image" /></div>
            </section>
            {/* //4 */}
            <section className="acpsecondfourthSectionImage">
                <div className="pagesTextbetween">
                    <h2 className="pagesTextFavorDivHeader">BEYOND LUXURY LIES LEGACY.</h2>
                    <div>
                        <div className="imageText">
                            <img src={glass} alt="bottleImg" className="logoText" />
                            <div>
                                <p className="logoTextParagraph">Best Enjoyed How You</p>
                                <p className="logoTextParagraph">Like Your Scotch</p>
                            </div>
                        </div>
                        <div className="imageText">
                            <img src={bottle} alt="bottleImg" className="logoText" />
                            <div>
                                <p className="logoTextParagraph">Best Enjoyed How You</p>
                                <p className="logoTextParagraph">Like Your Scotch</p>
                            </div>
                        </div>
                        <div className="imageText">
                            <img src={distik} alt="bottleImg" className="logoText" />
                            <div>
                                <p className="logoTextParagraph">Best Enjoyed How You</p>
                                <p className="logoTextParagraph">Like Your Scotch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //5 */}
            <div className="acppremiumfifthhDiv">
                <div className="acpremium5ImgDiv" >
                    <img src={acplast} alt="lastImg" />
                </div>
                <div className="acpremiumleftrightDiv">
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumleftArrowDiv">
                        <div className="premiumleftarrowDiv">
                            <h1 className="acppremiumarrowHeading">Aristocrat Premium (OLD)</h1>
                            <HiArrowLongLeft className="acparrowSize" />
                        </div>
                        <div>
                            <img src={acpnewImg} alt="block" className="leftImgBtn" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/RoyalMedallion'} className="acppremiumrightArrowDiv">
                        <div>
                            <img src={acpblack} alt="block" className="rightImgBtn" />
                        </div>
                        <div className="premiumrightarrow">
                            <h1 className="acppremiumarrowHeading">Aristocrat Black</h1>
                            <HiOutlineArrowLongRight className="acparrowSize"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

