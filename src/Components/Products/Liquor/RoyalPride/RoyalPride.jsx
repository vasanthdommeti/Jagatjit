
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../RoyalPride/RoyalPride.css'
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import royalpridefirstImg from '../../../../Assets/Products/Liquor/RoyalPride/royalpridefirstimg.png';
import royalpridelastimage from '../../../../Assets/Products/Liquor/RoyalPride/royalpridelastimg.png'
import candles from '../../../../Assets/Products/Liquor/AcBlack/candles.png';
import candle from '../../../../Assets//Products/Liquor/AcpremiumOld/deep.svg';
import glass from '../../../../Assets//Products/Liquor/AcpremiumOld/elegant.svg';
import hotglass from '../../../../Assets//Products/Liquor/AcpremiumOld/sweet.svg';
import lipglass from '../../../../Assets//Products/Liquor/AcpremiumOld/smooth.svg';
import royalpridethirdImg from '../../../../Assets/Products/Liquor/RoyalPride/royalpridethirdimg.png'
import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottle.svg';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.svg';
import glasss from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.png';
import acblack from '../../../../Assets/Products/Liquor/AcBlack/acblack1.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
import acpblack from '../../../../Assets/ArrowBottle/acBlack.svg';
import damnScotch from '../../../../Assets/ArrowBottle/damnScotch.svg';
import { Link } from "react-router-dom";
export const RoyalPride = () => {

    const [scrVideo, setScrVideo] = useState(""); 
    useEffect(() => { 
        axios.get('https://api.jagatjit.com/api/videos')
            .then(response => {
                let data = response.data.data.find((el) => {
                    return el.name == "ROYAL PRIDE"
                });

                setScrVideo(data.video_file)
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <section>
            {/* //1 completed*/}
            <div className="royalFirstDiv">
                <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%' }}>

                    <div className="royalRowContent">
                        <div className="animated"> <h1 className="royalHeading animated">
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
                    </div>
                    <div className="royalImgcontent">
                        <img src={royalpridefirstImg} alt="royalpride" />
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
                        <div className="animated">
                            Made with the
                        </div>
                    </h1>

                    <h1 className="royalSecondDivHeading">
                        <div className="animated">
                            finest grains
                        </div>
                    </h1>

                    <p className="royalSecondDivParagraph">
                        <div className="animated">
                            Launched in 2022, Royal Pride is crafted by our Scottish master blenders with the
                            <span> finest grain spirits</span> and
                            <span> imported Scotch malts.</span>
                        </div>
                    </p>

                </div>
            </div>

            {/* //3 incomplete side image and small images */}
            {/* <img src={candles} alt="block" className="royalcandleimagehide" /> */}
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
            <div className="royalPrideFourthDiv">
                <div className="royalThirdDivContent royalprideshow">
                    <h1 className="royalPrideSecondDivHeading" >Crafted for your Inner Connoisseur </h1>
                    <div className="icon-4-wrap">
                        <div className="royalimageText">
                            <img src={glasss} alt="block" className="royallogoimage" />
                            <p>Best Enjoyed How You Like Your Whiskey</p>
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
            </div>
            {/* <div>
                <img src={royalpridelastimage} alt="lastImg" style={{ height: '100%', width: '100%' }} />
            </div> */}
            {/* ///5 completed*/}

            <div>
                <div className="acpvideoDiv">
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
                </div>
                {/* <div className="acpNewarrowDiv">
                    <Link to={'/products/liquor/ACpremiumBlack'} className="acppremiumleftArrowDiv">
                        <div className="acpNewLeftDiv">
                            <h1 className="acpNpremiumarrowHeading">Aristocrat Premium Black</h1>
                            <HiArrowLongLeft className="leftIconImg" />
                        </div>
                        <div>
                            <img src={acblack} alt="block" className="acpNewleftSmallImg" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumrightArrowDiv">
                        <div>
                            <img src={damnscotch} alt="block" className="acpNewrightSmallImg" />
                        </div>
                        <div className="acpNewRightDiv">
                            <h1 className="acpNpremiumarrowHeading">Damn Good Scotch</h1>
                            <HiOutlineArrowLongRight className="leftIconImg" />
                        </div>
                    </Link>
                </div> */}
                <div className="acpNewarrowDiv">
<Link to={'/products/liquor/ACpremiumBlack'} className="acppremiumleftArrowDiv">
    <div className="acpNewLeftDiv">
        <h1 className="acpNpremiumarrowHeading">Aristocrat Black</h1>
        <HiArrowLongLeft className="leftIconImg" />
    </div>
    <div className="acpNewleftSmallImg">
        <img src={acpblack} alt="block" />
    </div>
</Link>
<Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumrightArrowDiv">
    <div className="acpNewrightSmallImg" >
        <img src={damnScotch} alt="block" />
    </div>
    <div className="acpNewRightDiv">
        <h1 className="acpNpremiumarrowHeading">Damn Good Scotch</h1>
        <HiOutlineArrowLongRight className="leftIconImg" />
    </div>
</Link>
</div> 
            </div>
        </section>
    )
}

