


import React from "react";
import '../Mff/Malt.css'
import horliks from '../../../Assets/Products/Mff/boosts.png';
import milkfood from '../../../Assets/Products/Mff/milkfood.png';

export const Malt = () => {
    return (
        <section>
            <div style={{ paddingBottom: '5%' }}>
                <div className="firstDiv">
                    <h1 className="maltsubHeading">
                        Food Products
                    </h1>
                    <p className="maltparagraph">
                        Jagatjit Industries Limited’s food division is versatile and diverse. JIL has a malt house, malt extract plant, a modern dairy and a malted milk food manufacturing unit. The malted milk food division has two units with a capacity to manufacture 120 tons per day of high quality malted milk food. JIL manufactures primer malted milk food for Unilever formerly know as GlaxoSmithKline Consumer Healthcare Ltd’s makers of Boost, Maltova and Horlicks, the leading brands in the country. Our own brands, Champion and Compleat are exported and loved in international markets.
                    </p>
                </div>
                <div className="imgTxtcontentDiv">
                    <div className="maltdivText">
                        <h1 className="maltsubHeading">
                            Malt
                        </h1>
                        <p className="maltparagraph">
                            The modern malt house produces malt from the best barley sourced after strict inspection, and undergoing our quality control processes from select farms which produce the best grains in Punjab. This malt is used to meet JIL’s own requirements in both the malted milk food division and the distillery division.
                        </p>
                        <p className="maltparagraph">
                            All three grades of malt made by JIL – food, distillery & brewery grade – are sold in the domestic and international markets. JIL enjoys a well-earned reputation for the quality of its malt extract, meeting the high standards demanded by customers like Kraft Foods Ltd., Cadbury (India) Ltd., GlaxoSmithKline Consumer Healthcare Ltd., Kellogg India Ltd., AB Foods Ltd. (Thailand) and more.
                        </p>
                    </div>
                    <div className="threeImageDiv">
                        <img src={horliks} alt="img" className="maltImglogo" />
                    </div>
                </div>
                <div className="imgTxtcontentDiv">
                    <div className="maltdivText">
                        <h1 className="maltsubHeading">Dairy</h1>
                        <p className="maltparagraph">
                            The dairy plant produces milk powder, dairy whitener, baby food, malt extract powder, malted milk food (spray dried) and clarified butter or ‘pure ghee’.
                        </p>
                    </div>
                </div>
                <div className="imgTxtcontentDiv">
                    <div className="maltdivText">
                        <h1 className="maltsubHeading">
                            Smart Milk
                        </h1>
                        <p className="maltparagraph">
                            This nutritious malt-based food product manufactured by us is supplied to the Indian army for its personnel. It is available in the domestic market as well as exported.
                        </p>
                    </div>
                    <div className="threeImageDiv">
                        <img src={milkfood} alt="milkfood" className="maltImglogo2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
