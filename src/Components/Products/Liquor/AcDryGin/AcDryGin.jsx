

import React from "react";
import '../AcDryGin/AcDryGin.css';
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import acDryGinfirstImg from '../../../../Assets/Products/Liquor/AcDryGin/acdryginsec1img.png';
import acDryGinLastImg from '../../../../Assets/Products/Liquor/AcDryGin/aristocrat.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
import royalMedallon from '../../../../Assets/Products/Liquor/RoyalMedalon/royalmedalonlogo.png'
import { Link } from "react-router-dom";


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
                            Distilled from the finest raw materials, this high quality Gin symbolizes the true spirit of fun and frolic.
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
                        Launched in The Year 1978
                    </h1>
                    <p className="acDryGinSecondDivParagraph">
                        Sold 2,07,389 Croses in FY 2012-13
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
                        Ready to be served straight-up or on the rocks, this drink is the revival
                        of the good old Gimlet.
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
                <div className="acpNewarrowDiv">
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
                </div>
            </div>
        </section>
    )
} 