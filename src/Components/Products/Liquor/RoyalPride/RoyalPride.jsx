
import React from "react";
import '../RoyalPride/RoyalPride.css'
import royalpridefirstImg from '../../../../Assets/Products/Liquor/RoyalPride/royalpridefirstimg.png';
import royalpridelastimage from '../../../../Assets/Products/Liquor/RoyalPride/royalpridelastimg.png'
import candles from '../../../../Assets/Products/Liquor/AcBlack/candles.png';
import candle from '../../../../Assets/Products/Liquor/RoyalPride/candle.png';
import hotglass from '../../../../Assets/Products/Liquor/RoyalPride/hotglass.png';
import lipglass from '../../../../Assets/Products/Liquor/RoyalPride/lipglass.png';
import glass from '../../../../Assets/Products/Liquor/RoyalPride/glass.png';

import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottles.png';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.png';
import glasss from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.png';
export const RoyalPride = () => {
    return (
        <section>
            {/* //1 */}
            <div className="acblackFirstDiv">
                <div className="acblackRowContent">
                    <h1>
                        Royal Pride
                    </h1>
                    <h4>
                        EXQUISITE WHISKEY
                    </h4>
                    <p>
                        From the Highland, Speyside and Islay regions of Scotland comes a whiskey
                        <span>exquisitely blended</span> and
                        <span>artfully crafted</span> - a pleasure for every palate which transports one to those fabled lands of folktales and snow with
                        <span>just one sip.</span>
                    </p>
                </div>
                <div>
                    <img src={royalpridefirstImg} alt="acblack" style={{ width: '100%' }} />
                </div>
            </div>
            {/* //2 */}
            <div className="royalPrideSecondDiv">
                <div className="acblackColumnContent">
                    <h1 className="acblackSecondDivHeading">
                        Launched in 2022
                    </h1>
                    <p className="acblackSecondDivParagraph">
                        Royal Pride is carefully created by our Scottish master blenders with the
                        <span>finest grain spirits</span> and
                        <span>imported Scotch malts.</span>
                    </p>
                </div>
            </div>

            {/* //3 */}
            <img src={candles} alt="block" className="candleimagehide" />
            <div className="royalPrideThirdDiv">
                <div className="royalprideThirdDivContent">
                    <h1 className="acblackSecondDivHeading">
                        An elegant blend that pays hoage to those who
                        enjoy the finer things in life.
                    </h1>
                    <div className="rowdiv">
                        <div className="candleimagesingle">
                            <img src={candle} alt="block" />
                            <p>Deep Gold</p>
                        </div>
                        <div className="candleimagesingle">
                            <img src={lipglass} alt="block" />
                            <p>Light on the Palate with flavors of roasted malt & spices</p>
                        </div>
                        <div className="candleimagesingle">
                            <img src={hotglass} alt="block" />
                            <p>Malty Notes. Subtly Spicy</p>
                        </div>
                        <div className="candleimagesingle">
                            <img src={glass} alt="block" />
                            <p>Elegant and Full Bodied</p>
                        </div>
                    </div>
                    {/* <img src={candles} alt="block" className="candleimage" /> */}
                </div>
            </div>
            {/* /4/ */}
            <div className="royalpridehide">
                <div className="imageText">
                    <img src={glasss} alt="block" className="logoimage" />
                    <p>Best Enjoyed How You Like Your Scotch</p>
                </div>
                <div className="imageText">
                    <img src={bottle} alt="block" className="logoimage" />
                    <p>Bottled With Care By State Of The Art Bottling Facilities</p>
                </div>
                <div className="imageText">
                    <img src={distik} alt="block" className="logoimage" />
                    <p>Made With The Finest Indian Spirits</p>
                </div>

            </div>
            <div className="royalPrideFourthDiv">
                <div className="acblackThirdDivContent royalprideshow" style={{ width: '45%', }}>
                    <div className="imageText">
                        <img src={glasss} alt="block" className="logoimage" />
                        <p>Best Enjoyed How You Like Your Scotch</p>
                    </div>
                    <div className="imageText">
                        <img src={bottle} alt="block" className="logoimage" />
                        <p>Bottled With Care By State Of The Art Bottling Facilities</p>
                    </div>
                    <div className="imageText">
                        <img src={distik} alt="block" className="logoimage" />
                        <p>Made With The Finest Indian Spirits</p>
                    </div>

                </div>
            </div>
            <div>
                <img src={royalpridelastimage} alt="lastImg" style={{ height: '100%', width: '100%' }} />
            </div>
        </section>
    )
}

