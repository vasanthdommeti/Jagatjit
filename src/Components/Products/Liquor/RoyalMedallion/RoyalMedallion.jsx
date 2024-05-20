



import React from "react";
import '../RoyalMedallion/RoyalMedallion.css';
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import medalionfirstImg from '../../../../Assets/Products/Liquor/RoyalMedalon/first.png';
import medalionLastImg from '../../../../Assets/Products/Liquor/RoyalMedalon/royalmedalon2.png';
import medalionsecondimg from '../../../../Assets/Products/Liquor/RoyalMedalon/royalmedalon2.png'
import medalionlogo from '../../../../Assets/Products/Liquor/RoyalMedalon/aristocratlogo.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';

import candle from '../../../../Assets/Products/Liquor/RoyalMedalon/candle1.png';
import hotglass from '../../../../Assets/Products/Liquor/RoyalMedalon/hotglass1.png';
import lipglass from '../../../../Assets/Products/Liquor/RoyalMedalon/lipglass1.png';
import glass from '../../../../Assets/Products/Liquor/RoyalMedalon/glass1.png';
import { Link } from "react-router-dom";



export const RoyalMedallion = () => {
    return (
        <section>
            {/* //1 */}
            <div className="medalionFirstDiv" style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
                <div className="medalionRowContent">
                    <h1 className="medalionHeading">
                        ROYAL
                    </h1>
                    <h1 className="medalionHeading">
                        MEDALLION
                    </h1>
                    <h4 className="medalionsecondHeading">
                        FRENCH XO BRANDY
                    </h4>
                    <p className="medalionParagraph">
                        In a tradition dating back to the royal family of Kapurthala, this premium brandy with superior, honeyed tones is crafted by French master blenders for today’s achievers.
                    </p>
                </div>
                <div className="medalionImgcontent">
                    <img src={medalionfirstImg} alt="acblack" style={{ width: '90%', marginBottom: '25%' }} />
                </div>
            </div>


            {/* //2 */}
            <div className="medalionSecondDiv">
                <div className="medalionColumnContent" >
                    <h1 className="medalionSecondDivHeading">
                        A view from the top
                    </h1>
                    <p className="medalionSecondDivParagraph">
                        Celebrating success, and the indomitable spirit of winners.
                    </p>
                </div>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <img src={medalionsecondimg} alt="lastImg" className="seconddivimgbot" />
                </div>
            </div>

            {/* //3 */}

            <div className="medalionThirdDiv">
                <div className="medalionThirdColumnContent">
                    <h1 className="medalionThirdDivHeading">
                        A Legacy of taste
                    </h1>
                    <div className="medalionrowdiv">
                        <div className="medalioncandleimagesingle">
                            <img src={glass} alt="block" className="thirdlogoimg" />
                            <p>Luxuriously smooth and long finish</p>
                        </div>
                        <div className="medalioncandleimagesingle">
                            <img src={candle} alt="block" className="thirdlogoimg" />
                            <p>Gold with an amber hue</p>
                        </div>
                        <div className="medalioncandleimagesingle" >
                            <img src={lipglass} alt="block" className="thirdlogoimg" />
                            <p>Heavy bodied, sweet like honey with a touch of matured oaky vanilla and caramel.</p>
                        </div>
                        <div className="medalioncandleimagesingle">
                            <img src={hotglass} alt="block" className="thirdlogoimg" />
                            <p>Intense fruity and floral, complimented with dried fruits like raisin, prune & nuts </p>
                        </div>

                    </div>

                </div>

            </div>
            <div className="mobileimgmed">
                <img src="src/Assets/Products/Liquor/RoyalMedalon/Group 1000001742.png" />
            </div>
            {/* //4 */}
            <div>
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
                    <Link to={'/products/liquor/AcDryGin'} className="acppremiumleftArrowDiv">
                        <div className="acpNewLeftDiv">
                            <h1 className="acpNpremiumarrowHeading">Aristocrat Dry Gin</h1>
                            <HiArrowLongLeft className="leftIconImg" />
                        </div>
                        <div>
                            <img src={medalionlogo} alt="block" className="acpNewleftSmallImg" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumrightArrowDiv">
                        <div>
                            <img src={damnscotch} alt="block" className="acpNewrightSmallImg" />
                        </div>
                        <div className="acpNewRightDiv">
                            <h1 className="acpNpremiumarrowHeading">Damn Good Scotch</h1>
                            <HiOutlineArrowLongRight className="leftIconImg" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}