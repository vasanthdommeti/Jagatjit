
import React from "react";
import '../RoyalPride/RoyalPride.css'
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import royalpridefirstImg from '../../../../Assets/Products/Liquor/RoyalPride/royalpridefirstimg.png';
import royalpridelastimage from '../../../../Assets/Products/Liquor/RoyalPride/royalpridelastimg.png'
import candles from '../../../../Assets/Products/Liquor/AcBlack/candles.png';
import candle from '../../../../Assets/Products/Liquor/RoyalPride/candle.png';
import hotglass from '../../../../Assets/Products/Liquor/RoyalPride/hotglass.png';
import lipglass from '../../../../Assets/Products/Liquor/RoyalPride/lipglass.png';
import glass from '../../../../Assets/Products/Liquor/RoyalPride/glass.png';
import royalpridethirdImg from '../../../../Assets/Products/Liquor/RoyalPride/royalpridethirdimg.png'
import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottles.png';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.png';
import glasss from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.png';
import acblack from '../../../../Assets/Products/Liquor/AcBlack/acblack.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
export const RoyalPride = () => {
    return (
        <section>
            {/* //1 completed*/}
            <div className="royalFirstDiv">
                <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
                    <div className="royalRowContent">
                        <h1 className="royalHeading">
                            ROYAL PRIDE
                        </h1>
                        <h4 className="royalsecondHeading">
                            EXQUISITE WHISKEY
                        </h4>
                        <p className="royalParagraph">
                            From the Highland, Speyside and Islay regions of Scotland comes a whiskey
                            <span> exquisitely blended</span> and
                            <span> artfully crafted</span> - a pleasure for every palate which transports one to those fabled lands of folktales and snow with
                            <span> just one sip.</span>
                        </p>
                    </div>
                    <div className="royalImgcontent">
                        <img src={royalpridefirstImg} alt="acblack" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            {/* //2 completed*/}
            <div className="royalPrideSecondDiv">
                <div className="royalColumnContent">
                    {/* <h1 className="royalSecondDivHeading">
                        Launched in 2022
                    </h1> */}
                    <h1 className="royalSecondDivHeading">
                        Made with the
                    </h1>
                    <h1 className="royalSecondDivHeading">
                        finest grains
                    </h1>
                    <p className="royalSecondDivParagraph">
                        Royal Pride is carefully created by our Scottish master blenders with the
                        <span> finest grain spirits</span> and
                        <span> imported Scotch malts.</span>
                    </p>
                </div>
            </div>

            {/* //3 incomplete side image and small images */}
            <img src={candles} alt="block" className="royalcandleimagehide" />
            <div className="royalPrideThirdDiv">
                <div className="royalprideThirdDivContent">
                    <div style={{ alignItems: 'flex-end', display: 'flex', paddingTop: '5%', }}>
                        <img src={royalpridethirdImg} alt="image" style={{ height: '100vh' }} />
                    </div>
                    <div style={{ padding: '5%' }}>
                        <h1 className="royalthirdDivLine">
                            Reinvent <span> yourself </span>
                            with every <span> sip.</span>
                        </h1>
                        <div className="royalrowdiv">
                            <div className="royalcandleimagesingle">
                                <img src={candle} alt="block" />
                                <p>Deep Gold</p>
                            </div>
                            <div className="royalcandleimagesingle" style={{ marginTop: '2%' }}>
                                <img src={lipglass} alt="block" />
                                <p>Light on the Palate with flavors of roasted malt & spices</p>
                            </div>
                            <div className="royalcandleimagesingle">
                                <img src={hotglass} alt="block" />
                                <p>Malty Notes. Subtly Spicy</p>
                            </div>
                            <div className="royalcandleimagesingle" style={{ marginLeft: '2%' }}>
                                <img src={glass} alt="block" />
                                <p>Elegant and Full Bodied</p>
                            </div>
                        </div>
                    </div>
                    {/* <img src={candles} alt="block" className="candleimage" /> */}
                </div>
            </div>
            {/* /4/  completed*/}
            <div className="royalpridehide">
                <div className="royalimageText">
                    <img src={glasss} alt="block" className="royallogoimage" />
                    <p>Best Enjoyed How You Like Your Scotch</p>
                </div>
                <div className="royalimageText">
                    <img src={bottle} alt="block" className="royallogoimage" />
                    <p>Bottled With Care By State Of The Art Bottling Facilities</p>
                </div>
                <div className="royalimageText">
                    <img src={distik} alt="block" className="royallogoimage" />
                    <p>Made With The Finest Indian Spirits</p>
                </div>

            </div>
            <div className="royalPrideFourthDiv">
                <div className="royalThirdDivContent royalprideshow" style={{ width: '45%', }}>
                    <h1 className="royalPrideSecondDivHeading" >Lauched in 2022</h1>
                    <div className="royalimageText">
                        <img src={glasss} alt="block" className="royallogoimage" />
                        <p>Best Enjoyed How You Like Your Scotch</p>
                    </div>
                    <div className="royalimageText">
                        <img src={bottle} alt="block" className="royallogoimage" style={{ marginRight: '12%', marginLeft: '3%' }} />
                        <p>Bottled With Care By State Of The Art Bottling Facilities</p>
                    </div>
                    <div className="royalimageText">
                        <img src={distik} alt="block" className="royallogoimage" />
                        <p>Made With The Finest Indian Spirits</p>
                    </div>

                </div>
            </div>
            {/* <div>
                <img src={royalpridelastimage} alt="lastImg" style={{ height: '100%', width: '100%' }} />
            </div> */}
            {/* ///5 completed*/}
            <div className="royalFourthDiv">
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <img src={royalpridelastimage} alt="lastImg" style={{ height: '60%', width: '60%' }} />
                </div>
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                    <div className="royalleftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="royalarrowHeading">Aristocrat Premium (New)</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={acblack} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </div>
                    <div className="royalrightArrowDiv">
                        <div>
                            <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="royalarrowHeading">Damn Good Scotch</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

