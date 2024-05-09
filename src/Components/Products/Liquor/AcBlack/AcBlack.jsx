import React from "react";
import '../AcBlack/AcBlack.css';
import acblackfirstImg from '../../../../Assets/Products/Liquor/AcBlack/acblackfirstimg.png';
import acblacksecondImg from '../../../../Assets/Products/Liquor/AcBlack/acblacksecondimg.png';
import candles from '../../../../Assets/Products/Liquor/AcBlack/candles.png';
import acblacklastImg from '../../../../Assets/Products/Liquor/AcBlack/acblacklastimg.png';

export const AcBlack = () => {
    return (
        <section>
            {/* //1 */}
            <div className="acblackFirstDiv">
                <div className="acblackRowContent">
                    <h1>
                        AC BLACK
                    </h1>
                    <h4>
                        PURE GRAIN WHISKEY
                    </h4>
                    <p>
                        The smooth taste and packaging embody a well-crafted melding of fine malt whisky from Scotland, and the finest Indian grain spirits
                    </p>
                </div>
                <div >
                    <img src={acblackfirstImg} alt="acblack" style={{ width: '100%' }} />
                </div>
            </div>
            {/* //2 */}
            <div className="acblackSecondDiv">
                <div className="acblackColumnContent">
                    <h1 className="acblackSecondDivHeading">
                        Endless Possibilities
                    </h1>
                    <p className="acblackSecondDivParagraph">
                        AC Black has been lauded by the Confederatin of Indian Alcoholic Beverage Companies,
                        a body which represents the major liquor companies in India and overseas.
                    </p>
                </div>
                {/* <img src={acblacksecondImg} alt="acblack" /> */}
            </div>
            {/* //3 */}
            <img src={candles} alt="block" className="candleimagehide" />
            <div className="acblackThirdDiv">
                <div className="acblackThirdDivContent">
                    <h1 className="acblackSecondDivHeading">
                        An elegant blend that pays hoage to those who
                        enjoy the finer things in life.
                    </h1>
                    <img src={candles} alt="block" className="candleimage" />
                </div>
            </div>
            <div>
                <img src={acblacklastImg} alt="lastImg" style={{ height: '100%', width: '100%' }} />
            </div>
        </section>
    )
}


