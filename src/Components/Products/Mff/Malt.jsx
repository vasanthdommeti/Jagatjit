


// import React from "react";
// import '../Mff/Malt.css'
// import horliks from '../../../Assets/Products/Mff/boosts.png';
// import milkfood from '../../../Assets/Products/Mff/milkfood.png';

// export const Malt = () => {
//     return (
//         <section>
//             <div style={{ paddingBottom: '5%' }}>
//                 <div className="firstDiv">
//                     <h1 className="maltsubHeading">
//                         Food Products
//                     </h1>
//                     <p className="maltparagraph">
//                         Jagatjit Industries Limited’s food division is versatile and diverse. JIL has a malt house, malt extract plant, a modern dairy and a malted milk food manufacturing unit. The malted milk food division has two units with a capacity to manufacture 120 tons per day of high quality malted milk food. JIL manufactures primer malted milk food for Unilever formerly know as GlaxoSmithKline Consumer Healthcare Ltd’s makers of Boost, Maltova and Horlicks, the leading brands in the country. Our own brands, Champion and Compleat are exported and loved in international markets.
//                     </p>
//                 </div>
//                 <div className="imgTxtcontentDiv">
//                     <div className="maltdivText">
//                         <h1 className="maltsubHeading">
//                             Malt
//                         </h1>
//                         <p className="maltparagraph">
//                             The modern malt house produces malt from the best barley sourced after strict inspection, and undergoing our quality control processes from select farms which produce the best grains in Punjab. This malt is used to meet JIL’s own requirements in both the malted milk food division and the distillery division.
//                         </p>
//                         <p className="maltparagraph">
//                             All three grades of malt made by JIL – food, distillery & brewery grade – are sold in the domestic and international markets. JIL enjoys a well-earned reputation for the quality of its malt extract, meeting the high standards demanded by customers like Kraft Foods Ltd., Cadbury (India) Ltd., GlaxoSmithKline Consumer Healthcare Ltd., Kellogg India Ltd., AB Foods Ltd. (Thailand) and more.
//                         </p>
//                     </div>
//                     <div className="threeImageDiv">
//                         <img src={horliks} alt="img" className="maltImglogo" />
//                     </div>
//                 </div>
//                 <div className="imgTxtcontentDiv">
//                     <div className="maltdivText">
//                         <h1 className="maltsubHeading">Dairy</h1>
//                         <p className="maltparagraph">
//                             The dairy plant produces milk powder, dairy whitener, baby food, malt extract powder, malted milk food (spray dried) and clarified butter or ‘pure ghee’.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="imgTxtcontentDiv">
//                     <div className="maltdivText">
//                         <h1 className="maltsubHeading">
//                             Smart Milk
//                         </h1>
//                         <p className="maltparagraph">
//                             This nutritious malt-based food product manufactured by us is supplied to the Indian army for its personnel. It is available in the domestic market as well as exported.
//                         </p>
//                     </div>
//                     <div className="threeImageDiv">
//                         <img src={milkfood} alt="milkfood" className="maltImglogo2" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


import React from "react";
import '../Mff/Malt.css';
import maltextraction from '../../../Assets/Products/Mff/maltbg3.png';
import milingProcess from '../../../Assets/Products/Mff/milling.png';
import mashing from '../../../Assets/Products/Mff/mashing.png';
import evaporation from '../../../Assets/Products/Mff/evoparation.png';

export const Malt = () => {
    return (
        <section className="bodySection">
                <div id="header">
                    <div id="malt-bg"></div>
                    <h1 class="malt-text">Malt Food Extract</h1>
                </div>

                <div class="content-container">
                    <div class="malt-description">
                        <p>Malt Extract is a blend of starch breakdown products containing mainly maltose (malt sugar), prepared from cereals like Barley, Wheat & Millets. <br/>
                            The malt is specially processed with water to develop sweetness, and the liquid is then filtered and evaporated into a thick, sweet liquid extract. Since this special processing preserves most of the natural characteristics of the whole grain, Malt Extracts are nutritious and healthy. Malt Extracts are also functional, adding bulk, acting as a natural humectant, enhancing body and viscosity in liquids, and more. Malt Extracts add a malty flavor and color ranging from mild malty to caramel.
                            JIL has extensive experience and process expertise to produce an array of Malt  and Cereal Extracts, well received in Indian and international markets for their superior quality standards. High quality ingredients combine with modern production facilities for malt extraction that is effective and efficient.   </p>
                    </div>
                </div>
                <div class="content-container">
                <div class="process-description">
                    <p>The procedure of converting malted grain/cereals into Malt or Cereal Extracts involves the following stages.

                    </p>

                    <img src={maltextraction} alt="Malt Extraction Process"/>
                </div>
                <div class="process-list">
                    <ul>
                        <li>Milling</li>
                        <li>Liquefaction of germinated grain</li>
                        <li>Mashing</li>
                        <li>Filtering and evaporation</li>
                    </ul>
                </div>
            </div>

            <div class="content-container">

                <div class="milling-description"><h2>Milling</h2></div>

                <div class="milling-description">
                    <p>To guarantee 100% extraction yield (= laboratory yield) as well as to guarantee the clearest possible wort, the malt must be milled very finely. For raw material with moisture content of 4% and over, we use a ventilated hammer mill with a horizontal shaft to finely grind malt, barley, sorghum and some cereals with moisture content up to 15 %. Because of the ventilated hammer mill, the risk of the mill being blocked because of humidity and of burning or explosion are overcome.</p>
                    <img src={milingProcess} alt="Milling Process"/>
                </div>


            </div>

            <div class="content-container">
                <div class="milling-description">
                    <h2>Mashing</h2>
                </div>

                <div class="milling-description">

                    <p>The milled, ground gain, called grist, is mixed with hot water or mashing liquor in mash vessels to form a thick mash as the starch converts to sugars. By entering the mash tun from the bottom, our machine takes care to avoid on one hand the oxygen pick up and, on the other hand, shear forces during the brewing process thanks to special agitators. This technique then encourages a better mash filtration due to the non-formation of large molecules leading to high viscosity.

                    </p>
                    <img src={mashing} alt="Mashing Process"/>  
                    </div>
            </div>

            <div class="content-container">
                <div class="milling-description">
                    <h2>Filtration</h2>
                </div>

                <div class="milling-description">

                    <p>Next, the liquid is passed through a mash filter to produce ‘wort’. The aim of malt extract/cereal extract production is to obtain the clearest possible wort as well as wort with the highest gravity. The low gravity or weak wort is used in the next mashing-in and, if required, partly also during the initial sparging cycle of the mash filter to achieve high densities. Our mash filter assures clear and dense wort between 25 and 30° before evaporation.
                    </p>
                </div>
                </div>

                <div class="content-container">
                    <div class="milling-description">
                        <h2>Evaporation</h2>
                    </div>

                    <div class="milling-description">

                        <p>This is the final step in manufacturing of Cereal Extract. The high-density wort is evaporated, concentrated down to 80% solids.  The multiple effect thin falling film evaporation technique is used for concentration. For reduction of steam consumption, a vapor compression system is incorporated to use the heat enthalpy of vapors in the concentration of extract. The final product is a viscous, amber colored liquid.

                        </p>
                        <img src={evaporation} alt="evoparation Process" />  </div>
                </div>
        </section>
    )
}

