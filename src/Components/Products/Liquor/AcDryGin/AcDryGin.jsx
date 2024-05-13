

import React from "react";
import '../AcDryGin/AcDryGin.css';
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import acDryGinfirstImg from '../../../../Assets/Products/Liquor/AcDryGin/acdryginsec1img.png';
import acDryGinLastImg from '../../../../Assets/Products/Liquor/AcDryGin/aristocrat.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
// import royalMedallon from '../../../../Assets/Products/Liquor/RoyalMedalon/'


export const AcDryGin = () => {
    return(
        <section>
            {/* //1 */}
            <div className="acDryGinFirstDiv">
                <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
                    <div className="acDryGinRowContent">
                        <h1 className="acDryGinHeading">
                        EXTRA DRY GIN
                        </h1>
                        <p className="acDryGinParagraph">
                        Distilled from the finest raw materials, this high quality Gin symbolizes the true spirit of fun and frolic.
                        </p>
                    </div>
                    <div className="acDryGinImgcontent">
                        <img src={acDryGinfirstImg} alt="acblack" style={{ width: '100%' }} />
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
                    Sold 2,07,389 Cases in FY 2012-13
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
                    Ready to be served straight-up or on the rocks, this drink is the revival of the good old Gimlet.
                    </p>
                </div>
            </div>

            {/* //4 */}
            <div className="acDryGinFourthDiv">
                <div style={{ justifyContent: 'center', display: 'flex', height: '50%', marginTop: '5%' }}>
                    <img src={acDryGinLastImg} alt="lastImg" />
                </div>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row',marginTop: '5%' }}>
                    <div className="acDryGinleftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="acDryGinarrowHeading">Damn Good Scotch</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </div>
                    <div className="acDryGinrightArrowDiv">
                        <div>
                            <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="acDryGinarrowHeading">Royal Medallion</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}