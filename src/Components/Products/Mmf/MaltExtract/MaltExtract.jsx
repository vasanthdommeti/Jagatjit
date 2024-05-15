
import React from "react";
import '../MaltExtract/MaltExtract.css';
import maltextraction from '../../../../Assets/Products/Mmf/maltbg3.png';
import milingProcess from '../../../../Assets/Products/Mmf/milling.png';
import mashing from '../../../../Assets/Products/Mmf/mashing.png';
import evaporation from '../../../../Assets/Products/Mmf/evoparation.png';
import mainImg from '../../../../Assets/Products/Mmf/malt_bg_1.png';

export const MaltExtract = () => {
    return (
        <section className="MaltbodySection">
                {/* <div id="header">
                    <div id="malt-bg"></div>
                    <h1 className="malt-text">Malt Food Extract</h1>
                </div> */}
                 <div className="maltSectionDiv">
    <img src={mainImg} alt="img"/>
    <h1 className="malttexthead">Malt Food Extract</h1>
 </div>

                <div className="maltcontent-container">
                    <div className="malt-description">
                        <p>Malt Extract is a blend of starch breakdown products containing mainly maltose (malt sugar), prepared from cereals like Barley, Wheat & Millets. <br/>
                            The malt is specially processed with water to develop sweetness, and the liquid is then filtered and evaporated into a thick, sweet liquid extract. Since this special processing preserves most of the natural characteristics of the whole grain, Malt Extracts are nutritious and healthy. Malt Extracts are also functional, adding bulk, acting as a natural humectant, enhancing body and viscosity in liquids, and more. Malt Extracts add a malty flavor and color ranging from mild malty to caramel.
                            JIL has extensive experience and process expertise to produce an array of Malt  and Cereal Extracts, well received in Indian and international markets for their superior quality standards. High quality ingredients combine with modern production facilities for malt extraction that is effective and efficient.   </p>
                    </div>
                </div>
                <div className="maltcontent-container">
                <div className="maltprocess-description">
                    <p>The procedure of converting malted grain/cereals into Malt or Cereal Extracts involves the following stages.

                    </p>

                    <img src={maltextraction} alt="Malt Extraction Process" className="maltImage"/>
                </div>
                <div className="maltprocess-list">
                    <ul>
                        <li>Milling</li>
                        <li>Liquefaction of germinated grain</li>
                        <li>Mashing</li>
                        <li>Filtering and evaporation</li>
                    </ul>
                </div>
            </div>

            <div className="maltcontent-container" >

                <div className="maltmilling-description"><h2>Milling</h2></div>

                <div className="maltmilling-description">
                    <p>To guarantee 100% extraction yield (= laboratory yield) as well as to guarantee the clearest possible wort, the malt must be milled very finely. For raw material with moisture content of 4% and over, we use a ventilated hammer mill with a horizontal shaft to finely grind malt, barley, sorghum and some cereals with moisture content up to 15 %. Because of the ventilated hammer mill, the risk of the mill being blocked because of humidity and of burning or explosion are overcome.</p>
                    <img src={milingProcess} alt="Milling Process" className="maltImage"/>
                </div>


            </div>

            <div className="maltcontent-container">
                <div className="maltmilling-description">
                    <h2>Mashing</h2>
                </div>

                <div className="maltmilling-description">

                    <p>The milled, ground gain, called grist, is mixed with hot water or mashing liquor in mash vessels to form a thick mash as the starch converts to sugars. By entering the mash tun from the bottom, our machine takes care to avoid on one hand the oxygen pick up and, on the other hand, shear forces during the brewing process thanks to special agitators. This technique then encourages a better mash filtration due to the non-formation of large molecules leading to high viscosity.

                    </p>
                    <img src={mashing} alt="Mashing Process" className="maltImage"/>  
                    </div>
            </div>

            <div className="maltcontent-container">
                <div className="maltmilling-description">
                    <h2>Filtration</h2>
                </div>

                <div className="maltmilling-description">

                    <p>Next, the liquid is passed through a mash filter to produce ‘wort’. The aim of malt extract/cereal extract production is to obtain the clearest possible wort as well as wort with the highest gravity. The low gravity or weak wort is used in the next mashing-in and, if required, partly also during the initial sparging cycle of the mash filter to achieve high densities. Our mash filter assures clear and dense wort between 25 and 30° before evaporation.
                    </p>
                </div>
                </div>
{/* //4 */}
                <div className="maltcontent-container">
                    <div className="maltmilling-description">
                        <h2>Evaporation</h2>
                    </div>

                    <div className="maltmilling-description">

                        <p>This is the final step in manufacturing of Cereal Extract. The high-density wort is evaporated, concentrated down to 80% solids.  The multiple effect thin falling film evaporation technique is used for concentration. For reduction of steam consumption, a vapor compression system is incorporated to use the heat enthalpy of vapors in the concentration of extract. The final product is a viscous, amber colored liquid.

                        </p>
                        <img src={evaporation} alt="evoparation Process"  className="maltImage1"/>  </div>
                </div>
        </section>
    )
}

