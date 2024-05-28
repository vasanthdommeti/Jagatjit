

import React from "react";
import '../AcDryGin/AcDryGin.css';
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import acDryGinfirstImg from '../../../../Assets/Products/Liquor/AcDryGin/acdryginsec1img.png';
import acDryGinLastImg from '../../../../Assets/Products/Liquor/AcDryGin/aristocrat.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
import royalMedallon from '../../../../Assets/Products/Liquor/RoyalMedalon/royalmedalonlogo.png'
import { Link } from "react-router-dom";
import iceVodka from '../../../../Assets/ArrowBottle/iceVodka.svg';
import royalMedol from '../../../../Assets/ArrowBottle/royalMedal.svg';


export const AcDryGin = () => {
    return (
        <section>
            {/* //1 */}
            <div className="acDryGinFirstDiv acDryGin1divHead">
                <div className="acDryGin1divHead">
                    <div className="acDryGinRowContent">
                        <h1 className="acDryGinHeading">
                            Extra Dry Gin
                        </h1>
                        <p className="acDryGinParagraph">
                        Slow distilled from the finest grains and Indian botanicals, this gin creates fun and frolic wherever it goes.

                        </p>
                    </div>
                    <div className="acDryGinImgcontent">
                        <img src={acDryGinfirstImg} alt="acblack" className="acdryGin1stImg" />
                    </div>
                </div>
            </div>

            {/* //2 */}
            <div className="acDryGinSecondDiv">
                <div className="acDryGinColumnContent">
                    <h1 className="acDryGinSecondDivHeading">
                    Launched in 1978

                    </h1>
                    <p className="acDryGinSecondDivParagraph">
                    Still going strong and enhancing celebrations in India and abroad 

                    </p>
                </div>
            </div>

            {/* //3  clarification*/}

            <div className="acDryGinThirdDiv">
                <div className="acDryGinThirdColumnContent">
                    <h1 className="acDryGinThirdDivHeading">
                        Fun and Frolic
                    </h1>
                    <p className="acDryGinThirdDivParagraph" >
                    Whether served straight up, as a classic gimlet or in trendy cocktails, this gin is smooth and delicious.

                    </p>
                </div>
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
                {/* <div className="acpNewarrowDiv">
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumleftArrowDiv">
                        <div className="acpNewLeftDiv">
                            <h1 className="acpNpremiumarrowHeading">Damn Good Scotch</h1>
                            <HiArrowLongLeft className="leftIconImg" />
                        </div>
                        <div>
                            <img src={damnscotch} alt="block" className="acpNewleftSmallImg" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/RoyalMedallion'} className="acppremiumrightArrowDiv">
                        <div>
                            <img src={royalMedallon} alt="block" className="acpNewrightSmallImg" />
                        </div>
                        <div className="acpNewRightDiv">
                            <h1 className="acpNpremiumarrowHeading">Royal Medallion</h1>
                            <HiOutlineArrowLongRight className="leftIconImg" />
                        </div>
                    </Link>
                </div> */}
                <div className="acpNewarrowDiv">
                    <Link to={'/products/liquor/iicevodka'} className="acppremiumleftArrowDiv">
                        <div className="acpNewLeftDiv">
                            <h1 className="acpNpremiumarrowHeading">IICE Vodka</h1>
                            <HiArrowLongLeft className="leftIconImg" />
                        </div>
                        <div className="acpNewleftSmallImg">
                            <img src={iceVodka} alt="block" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/royalmedallion'} className="acppremiumrightArrowDiv">
                        <div className="acpNewrightSmallImg" >
                            <img src={royalMedol} alt="block" />
                        </div>
                        <div className="acpNewRightDiv">
                            <h1 className="acpNpremiumarrowHeading">Royal Medallion</h1>
                            <HiOutlineArrowLongRight className="leftIconImg" />
                        </div>
                    </Link>
                </div> 
            </div>
        </section>
    )
} 