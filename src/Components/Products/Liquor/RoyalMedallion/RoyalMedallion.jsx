



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
    return(
        <section>
            {/* //1 */}
            <div className="medalionFirstDiv">
                <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
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
                        In a tradition dating back to the royal family of Kapurthala, this premium brandy is crafted by French master blenders for today’s aristocrats.
                        </p>
                    </div>
                    <div className="medalionImgcontent">
                        <img src={medalionfirstImg} alt="acblack" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>

            {/* //2 */}
            <div className="medalionSecondDiv">
                <div className="medalionColumnContent" >
                    <h1 className="medalionSecondDivHeading">
                    Heritage of Quality
                    </h1>
                    <p className="medalionSecondDivParagraph">
                    Celebrating self-made success, it pays tribute to the indomitable spirit that unites legends.
                    </p>
                </div>
                <div style={{ justifyContent: 'center', display: 'flex'}}>
                    <img src={medalionsecondimg} alt="lastImg"  style={{height:'470px'}} />
                    </div>
            </div>

            {/* //3 */}

            <div className="medalionThirdDiv">
                <div className="medalionThirdColumnContent">
                    <h1 className="medalionThirdDivHeading">
                        Royal with every sip
                    </h1>
                    <div className="medalionrowdiv">
                    <div className="medalioncandleimagesingle">
                <img src={glass} alt="block" className="thirdlogoimg"/>
                <p>Luxuriously smooth and long finish</p>
              </div>
              <div className="medalioncandleimagesingle">
                <img src={candle} alt="block" className="thirdlogoimg"/>
                <p>Gold with an amber hue</p>
              </div>
              <div className="medalioncandleimagesingle" >
                <img src={lipglass} alt="block" className="thirdlogoimg"/>
                <p>Heavy bodied, sweet like honey with a touch of matured oaky vanilla and caramel.</p>
              </div>
              <div className="medalioncandleimagesingle">
                <img src={hotglass} alt="block" className="thirdlogoimg"/>
                <p>Intense fruity and floral, complimented with dried fruits like raisin, prune & nuts </p>
              </div>

            </div>

                </div>
            </div>

            {/* //4 */}
            <div className="medalionFourthDiv">
                <div style={{ justifyContent: 'center', display: 'flex', height: '50%', marginTop: '5%' }}>
                    <img src={medalionLastImg} alt="lastImg" />
                </div>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row',marginTop: '5%' }}>
                    <Link className="medalionleftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="medalionarrowHeading">Aristocrat Dry Gin</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={medalionlogo} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </Link>
                    <Link className="medalionrightArrowDiv">
                        <div>
                            <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="medalionarrowHeading">Damn Good Scotch</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}