import React from "react";
import '../AcBlack/AcBlack.css';
// import { FaArrowLeftLong } from "react-icons/fa6";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import acblackfirstImg from '../../../../Assets/Products/Liquor/AcBlack/acblackfirstimg.png';
import acblacksecondImg from '../../../../Assets/Products/Liquor/AcBlack/acblacksecondimg.png';
import candles from '../../../../Assets/Products/Liquor/AcBlack/candles.png';
import acblacklastImg from '../../../../Assets/Products/Liquor/AcBlack/acblacklastimg.png';
import candle from '../../../../Assets/Products/Liquor/RoyalPride/candle.png';
import glass from '../../../../Assets/Products/Liquor/RoyalPride/glass.png';
import hotglass from '../../../../Assets/Products/Liquor/RoyalPride/hotglass.png';
import lipglass from '../../../../Assets/Products/Liquor/RoyalPride/lipglass.png';
import acblack from '../../../../Assets/Products/Liquor/AcBlack/acblack.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
import { Link } from "react-router-dom";

export const AcBlack = () => {
    return (
        <section>
            {/* //1 completed */}
            <div className="acblackFirstDiv">
                <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
                    <div className="acblackRowContent">
                        <h1 className="acblackHeading">
                            AC BLACK
                        </h1>
                        <h4 className="acblacksecondHeading">
                            PURE GRAIN WHISKEY
                        </h4>
                        <p className="acblackParagraph">
                            Smooth taste and packaging embody a well-crafted melding of fine malt whisky from Scotland, and the finest Indian grain spirits.
                        </p>
                    </div>
                    <div className="acblackImgcontent">
                        <img src={acblackfirstImg} alt="acblack" style={{ width: '100%', }} />
                    </div>
                </div>
            </div>
            {/* //2 completed*/}
            <div className="acblackSecondDiv">
                <div className="acblackColumnContent">
                    <h1 className="acblackSecondDivHeading">
                        An Elegant,
                    </h1>
                    <h1 className="acblackSecondDivHeading">
                        World Class Blend
                    </h1>
                    <p className="acblackSecondDivParagraph">
                        Lauded by the Confederation of Indian Alcoholic Beverage Companies,
                        the body which represents the major liquor companies in India and overseas.
                    </p>
                </div>
                {/* <img src={acblacksecondImg} alt="acblack" /> */}
            </div>
            {/* //3 completed but alignment small images*/}
            {/* <img src={candles} alt="block" className="candleimagehide" /> */}
            <div className="candleimagehide">
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} className="candle-image-wrap">
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                        <img src={glass} alt="" />
                        <p>Elegant and long-lasting</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                        <img src={candle} alt="" />
                        <p>Deep Gold</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                        <img src={lipglass} alt="" />
                        <p>Smooth on the palate, green apple and spices</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                        <img src={hotglass} alt="" />
                        <p>Honeyed, floral, with malty notes and a touch of spices</p>
                    </div>
                </div>
            </div>
            <div className="acblackThirdDiv">
                <div className="acblackThirdDivContent">
                    <h1 className="acblackThirdDivHeading">
                        An homage to who
                        enjoy the finer things in life
                    </h1>
                    {/* <img src={candles} alt="block" className="candleimage" /> */}
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} className="candle-image-wrap-desk">
                        <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                            <img src={glass} alt="" />
                            <p>Elegant and long-lasting</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                            <img src={candle} alt="" />
                            <p>Deep Gold</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                            <img src={lipglass} alt="" />
                            <p>Smooth on the palate, green apple and spices</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '2%', width: '40%' }}>
                            <img src={hotglass} alt="" />
                            <p>Honeyed, floral, with malty notes and a touch of spices</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="acblackFourthDiv">
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <img src={acblacklastImg} alt="lastImg" style={{ height: '60%', width: '60%' }} />
                </div>
                <div className="pre-next-wrap">
                    <Link to={'/products/liquor/ACpremiumNew'} className="leftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="arrowHeading">Aristocrat Premium</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={acblack} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </Link>
                    <Link to='/products/liquor/RoyalPride' className="rightArrowDiv">
                        <div>
                            <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="arrowHeading">Damn Good Scotch</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}


