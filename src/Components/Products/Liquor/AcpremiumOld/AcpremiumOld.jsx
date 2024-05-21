import React from "react";
import "../AcpremiumOld/AcpremiumOld.css";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import curtainImg from '../../../../Assets/Products/Liquor/AcpremiumOld/sectionCurtain.png';
import flavourImg from '../../../../Assets/Products/Liquor/AcpremiumOld/sectionFlavours.png';
import flavourGroup from '../../../../Assets/Products/Liquor/AcpremiumOld/flavourGroup.png'
import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottle.svg';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.svg';
import glass from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.png';
import acpsectiononelogo from '../../../../Assets/Products/Liquor/AcpremiumNew/acpsectiononelogo.png';
import acpsectiontwoimgs from '../../../../Assets/Products/Liquor/AcpremiumOld/sec1bottle.png';
import acpblack from '../../../../Assets/Products/Liquor/AcpremiumNew/damnlink.svg';
import acpnewImg from '../../../../Assets/Products/Liquor/AcpremiumNew/acpnewlink.svg';
import acplast from '../../../../Assets/Products/Liquor/AcpremiumNew/acplastImg.png';

export const AcpremiumOld = () => {
    return (
        <div className="acpremium-container">
            {/* //1 */}
            <div className="acpoldpagesRowDiv acpoldSecondPageSectionOneImage">
                <div className="acpsecDiv">
                    <img src={acpsectiononelogo} alt="bottleImg" className="bottleImgLogo" />
                    <h2 className="acpoldSecondHeading">CLASSIC WHISKEY</h2>
                    <p className="acpoldParagraph">One of India's most-loved whiskey brands with its iconic gold and deep-red bottle.</p>
                </div>
                <img src={acpsectiontwoimgs} alt="bottleImg" className="bottleImg bottleImgfirst" />
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
                        <p className="sectionTwoParagraph">Distinctive and refined in both taste and look, it is blended with pure grain and select imported Scotch malts, bringing a <span>honeyed and delightful experince</span> to its loyal patrons</p>
                    </div>
                </div>
            </div>
            {/* //3 */}
            <section className="sectionThree">
                <div><img src={curtainImg} alt="leftCurtain" className="image img-dec" /></div>
                <div className="flavourDiv">
                    <h1 className="flavourDivHeader">FLAVOUR PROFILE</h1>
                    <img src={flavourGroup} alt="groupBtl" className="image favBotGroupImg" />
                    {/* <img src={flavourImg} alt="flavours" className="image" /> */}
                    <div className="profile-icon-wrap">
                        <div className="profile-icon-1">Elegant and Long Lasting</div>
                        <div className="profile-icon-2">Sweet, Floral with a touch of spices</div>
                        <div className="profile-icon-3">Deep Gold to the eyes</div>
                        <div className="profile-icon-4">Smooth, with a hint of Fruit & Spices</div>
                    </div>
                </div>
                <div><img src={curtainImg} alt="rightCurtain" className="curtainImage image img-dec" /></div>
            </section>
            {/* //4 */}
            <section className="acpsecondfourthSectionImage">
                <div className="pagesTextbetween">
                    <h2 className="pagesTextFavorDivHeader">BEYOND LUXURY LIES LEGACY.</h2>
                    <div className="legacy-img-wrap">
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
                                <p className="logoTextParagraph">Bottled With Care By State</p>
                                <p className="logoTextParagraph">Of the Art Bottling Facilities</p>
                            </div>
                        </div>
                        <div className="imageText">
                            <img src={distik} alt="bottleImg" className="logoText" />
                            <div>
                                <p className="logoTextParagraph">Made With The Finest</p>
                                <p className="logoTextParagraph">Indian Spirits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //5 */}

            <div className="video-link-redirect">
                {/* <div className="acpvideoDiv">
                {scrVideo && (
                    <video
                        className="videoContent"
                        width="100%"
                        height="100%"
                        // controls
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={scrVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                </div> */}
                <div className="acpNewarrowDiv">
                    <Link to={'/products/liquor/ACpremiumNew'} className="acppremiumleftArrowDiv">
                        <div className="acpNewLeftDiv">
                            <h1 className="acpNpremiumarrowHeading">Aristocrat Premium</h1>
                            <HiArrowLongLeft className="leftIconImg" />
                        </div>
                        <div className="acpNewleftSmallImg">
                            <img src={acpnewImg} alt="block" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumrightArrowDiv">
                        <div className="acpNewrightSmallImg" >
                            <img src={acpblack} alt="block" />
                        </div>
                        <div className="acpNewRightDiv">
                            <h1 className="acpNpremiumarrowHeading">Damn Good Scotch</h1>
                            <HiOutlineArrowLongRight className="leftIconImg" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

