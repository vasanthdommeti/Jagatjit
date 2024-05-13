



import React from "react";
import '../RoyalMedallion/RoyalMedallion.css';
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import medalionfirstImg from '../../../../Assets/Products/Liquor/RoyalMedalon/first.png';
import medalionLastImg from '../../../../Assets/Products/Liquor/AcDryGin/aristocrat.png';
import acblack from '../../../../Assets/Products/Liquor/AcBlack/acblack.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';



export const RoyalMedallion = () => {
    return(
        <section>
            {/* //1 */}
            <div className="medalionFirstDiv">
                <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
                    <div className="medalionRowContent">
                        <h1 className="medalionHeading">
                        ROYAL MEDALLION
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
                <div className="medalionColumnContent">
                    <h1 className="medalionSecondDivHeading">
                    Heritage of Quality
                    </h1>
                    <p className="medalionSecondDivParagraph">
                    Celebrating self-made success, it pays tribute to the indomitable spirit that unites legends.
                    </p>
                </div>
            </div>

            {/* //3 */}

            <div className="medalionThirdDiv">
                <div className="medalionColumnContent">
                    <h1 className="medalionSecondDivHeading">
                        Launched in 2022
                    </h1>
                    <h1 className="medalionSecondDivHeading">
                        Made with the
                    </h1>
                    <h1 className="medalionSecondDivHeading">
                        finest grains
                    </h1>
                    <p className="medalionSecondDivParagraph">
                        Royal Pride is carefully created by our Scottish master blenders with the
                        <span> finest grain spirits</span> and
                        <span> imported Scotch malts.</span>
                    </p>
                </div>
            </div>

            {/* //4 */}
            <div className="medalionFourthDiv">
                <div style={{ justifyContent: 'center', display: 'flex', height: '50%', marginTop: '5%' }}>
                    <img src={medalionLastImg} alt="lastImg" />
                </div>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row',marginTop: '5%' }}>
                    <div className="medalionleftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="medalionarrowHeading">Aristocrat Premium (New)</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={acblack} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </div>
                    <div className="medalionrightArrowDiv">
                        <div>
                            <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="medalionarrowHeading">Damn Good Scotch</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}