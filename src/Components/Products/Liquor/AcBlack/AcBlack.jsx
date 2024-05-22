import React, { useEffect, useState } from "react";
import axios from "axios";
import '../AcBlack/AcBlack.css';
// import { FaArrowLeftLong } from "react-icons/fa6";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import acblackfirstImg from '../../../../Assets/Products/Liquor/AcBlack/acblackfirstimg.png';
import acblacksecondImg from '../../../../Assets/Products/Liquor/AcBlack/acblacksecondimg.png';
import candles from '../../../../Assets/Products/Liquor/AcBlack/candles.png';
import acblacklastImg from '../../../../Assets/Products/Liquor/AcBlack/acblacklastimg.png';
import candle from '../../../../Assets//Products/Liquor/AcpremiumOld/deep.svg';
import glass from '../../../../Assets//Products/Liquor/AcpremiumOld/elegant.svg';
import hotglass from '../../../../Assets//Products/Liquor/AcpremiumOld/sweet.svg';
import lipglass from '../../../../Assets//Products/Liquor/AcpremiumOld/smooth.svg';
import acblack from '../../../../Assets/Products/Liquor/AcBlack/acblack.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
import { Link } from "react-router-dom";
import RoyalPride from '../../../../Assets/ArrowBottle/royalPride.svg';
import acpNew from '../../../../Assets/ArrowBottle/acpNew.svg';

export const AcBlack = () => {

    const [scrVideo, setScrVideo] = useState("");

    useEffect(() => {
        axios.get('https://api.jagatjit.com/api/videos')
            .then(response => {
                let data = response.data.data.find((el) => {
                    return el.name == "AC BLACK"
                });

                setScrVideo(data.video_file)
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <section>
            {/* //1 completed */}
            <div className="acblackFirstDiv">
                <div className="acsec1div">
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
                        <img src={acblackfirstImg} alt="acblack" className="acfirstImg" />
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
                <div className="candle-image-wrap accandleDiv">
                    <div className="aciconsDiv">
                        <img src={glass} alt="" />
                        <p>Elegant and long-lasting</p>
                    </div>
                    <div className="aciconsDiv">
                        <img src={candle} alt="" />
                        <p>Deep Gold</p>
                    </div>
                    <div className="aciconsDiv">
                        <img src={lipglass} alt="" />
                        <p>Smooth on the palate, green apple and spices</p>
                    </div>
                    <div className="aciconsDiv">
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
                    <div className="candle-image-wrap-desk accandleDiv">
                        <div className="aciconsDiv">
                            <img src={glass} alt="" />
                            <p>Elegant and long-lasting</p>
                        </div>
                        <div className="aciconsDivopp">
                            <img src={candle} alt="" />
                            <p>Deep Gold</p>
                        </div>
                        <div className="aciconsDiv">
                            <img src={lipglass} alt="" />
                            <p>Smooth on the palate, green apple and spices</p>
                        </div>
                        <div className="aciconsDivopp">
                            <img src={hotglass} alt="" />
                            <p>Honeyed, floral, with malty notes and a touch of spices</p>
                        </div>
                    </div>
                </div>
            </div>
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
                <div className="acpNewarrowDiv">
                    <Link to={'/products/liquor/ACpremiumNew'} className="acppremiumleftArrowDiv">
                        <div className="acpNewLeftDiv">
                            <h1 className="acpNpremiumarrowHeading">Aristocrat Premium</h1>
                            <HiArrowLongLeft className="leftIconImg" />
                        </div>
                        <div className="acpNewleftSmallImg">
                            <img src={acpNew} alt="block" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/RoyalPride'} className="acppremiumrightArrowDiv">
                        <div className="acpNewrightSmallImg" >
                            <img src={RoyalPride} alt="block" />
                        </div>
                        <div className="acpNewRightDiv">
                            <h1 className="acpNpremiumarrowHeading">Royal Pride</h1>
                            <HiOutlineArrowLongRight className="leftIconImg" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}


