

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
            <div className="acDryGinFirstDiv">
                <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
                    <div className="acDryGinRowContent">
                        <h1 className="acDryGinHeading">
                            Aristocrat Extra Dry Gin
                        </h1>
                        <p className="acDryGinParagraph">
                            Slow distilled from the finest grains and Indian botanicals, this gin creates fun and frolic wherever it goes.
                        </p>
                    </div>
                    <div className="acDryGinImgcontent">
                        <img src={acDryGinfirstImg} alt="acblack" style={{ width: '100%', }} />
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
            <div className="acDryGinFourthDiv">
                <div style={{ justifyContent: 'center', display: 'flex', height: '50%', marginTop: '5%' }}>
                    <img src={acDryGinLastImg} alt="lastImg" />
                </div>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', marginTop: '5%' }}>
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acDryGinleftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="acDryGinarrowHeading">Damn Good Scotch</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/RoyalMedallion'} className="acDryGinrightArrowDiv">
                        <div>
                            <img src={royalMedallon} alt="block" style={{ height: '150px', marginRight: '5px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="acDryGinarrowHeading">Royal Medallion</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
} 