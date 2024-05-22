
import React from "react";
import '../DamnScotch/DamnScotch.css';
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import firstSecimg from '../../../../Assets/Products/Liquor/DamnScotch/damn1stSecimg.png';
import secondSecimg from '../../../../Assets/Products/Liquor/DamnScotch/damn2ndSecimg.png';
import lastSecimg from '../../../../Assets/Products/Liquor/DamnScotch/damnlastSecimg.png';
//section3rd small img
import candle from '../../../../Assets/Products/Liquor/RoyalPride/candle.png';
import hotglass from '../../../../Assets/Products/Liquor/RoyalPride/hotglass.png';
import lipglass from '../../../../Assets/Products/Liquor/RoyalPride/lipglass.png';
import glass from '../../../../Assets/Products/Liquor/RoyalPride/glass.png';
import candles from '../../../../Assets/Products/Liquor/AcBlack/candles.png';

import acblack from '../../../../Assets/Products/Liquor/AcBlack/acblack.png';
import damnscotch from '../../../../Assets/Products/Liquor/AcBlack/damnscotch.png';
//section4thsmall img
import bottle from '../../../../Assets/Products/Liquor/DamnScotch/damngoodiconbottle.png';
import distik from '../../../../Assets/Products/Liquor/DamnScotch/damngooddrums.png';
import glasss from '../../../../Assets/Products/Liquor/DamnScotch/damngoodiconglass.png';
import drums from '../../../../Assets/Products/Liquor/RoyalPride/drums.png';
import { Link } from "react-router-dom";
import RoyalPride from '../../../../Assets/ArrowBottle/royalPride.svg';
import iceVodka from '../../../../Assets/ArrowBottle/iceVodka.svg';

export const DamnScotch = () => {
  return (
    <section>
      {/* //1st cursive pending */}
      <div className="damnFirstDiv">
        <div className="damnfirstdiveitems">
          <div className="damnImgcontent">
            <img src={firstSecimg} alt="acblack"/>
          </div>
          <div className="damnRowContent">
            {/* <h1 className="damnHeading">
              DAMN GOOD SCOTCH 
            </h1> */}
            <div className="logoImgTextCont"></div>
            {/* <img src={headImg} alt="img"/> */}
            <h4 className="damnsecondHeading">
              BLENDED SCOTCH WHISKEY
            </h4>
            <p className="damnParagraph">
              Exclusively distilled and aged for 3 years in wooden barrels in the Scottish Highlands, this amber-gold whisky delivers unforgettable silken smoothness and is a favourite of whisky connoisseurs.
            </p>
          </div>

        </div>
      </div>
      {/* //2nd */}
      <div className="damnsecondDiv">
        <div className="damnsecondRowContent">
          <h1 className="damnHeading">
            Royalty Redefined
          </h1>
          {/* <div className="logoImgTextCont"></div> */}
          <p className="damnParagraph">
            A Scotch whisky of rare character, KING HENRY VIII truly lives up to its name.
          </p>
        </div>
      </div>
      {/* //3rd */}
      {/* <img src={candles} alt="block" className="royalcandleimagehide" /> */}
      <div className="damnThirdDiv">
        <div className="damnThirdDivContent">
          {/* <div style={{alignItems:'flex-end', display:'flex', paddingTop:'5%',}}>
                        <img src={royalpridethirdImg} alt="image" style={{height:'100vh'}} />
                    </div> */}
          <div style={{ marginTop: '5%', alignContent: 'flex-end' }}>
            <h1 className="damnthirdDivLine">
              Our Smoothest
            </h1>
            <h1 className="damnthirdDivLine">
              Blend Yet
            </h1>

            <div className="damnrowdiv">
              <div className="damncandleimagesingle" style={{ marginLeft: '2%' }}>
                <img src={candle} alt="block" />
                <p>Amber</p>
              </div>
              <div className="damncandleimagesingle" style={{ marginTop: '0.5%'}}>
                <img src={lipglass} alt="block" />
                <p>Delicate, smooth and long-lasting</p>
              </div>
              <div className="damncandleimagesingle">
                <img src={hotglass} alt="block" />
                <p>Medium-bodied, mildly sweet, nutty and malty flavors faintly floral, with trace notes of honey and fruit</p>
              </div>
              <div className="damncandleimagesingle">
                <img src={glass} alt="block" />
                <p>Malt, vanilla, fruity, lightly smoky and peaty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //4 */}

      <div className="damngoodiconlist">
        <div className="damngoodimageText">
          <img src={glasss} alt="block" className="damngoodlogoimage" />
          <p>Best enjoyed how you like your scotch</p>
        </div>
        <div className="damngoodimageText">
          <img src={bottle} alt="block" className="damngoodlogoimage" />
          <p>Bottled With Care By State Of the art bottling facilities</p>
        </div>
        <div className="damngoodimageText">
          <img src={distik} alt="block" className="damngoodlogoimage" />
          <p>Stored in Oak Wood Barrels from Scotland</p>
        </div>

      </div>
      <div className="damnFourthDiv">
        <div className="damnForthDivContent" >
          <h1 className="damnSecondDivHeading" >Aged for 3 years in</h1>
          <h1 className="damnSecondDivHeading" >The Scottish Highlands</h1>
          <div className="damnimageText" style={{ marginTop: '2%' }}> 
            <img src={glasss} alt="block" className="damnlogoimage" />
            <p>Best Enjoyed How You Like Your Scotch</p>
          </div>
          <div className="damnimageText">
            <img src={bottle} alt="block" className="damnlogoimage damngoodiconbottle"  />
            <p>Bottled with care by state of the art bottling facilities</p>
          </div>
          <div className="damnlogodrumsimage">
            <img src={drums} alt="block" className="damnlogoimage"/>
            <p>Made with the finest Indian spirits</p>
          </div>

        </div> 
      </div>
      {/* ///5 completed*/}
      <div className="damFifthDiv" >
        <div style={{ justifyContent: 'center', display: 'flex', height: '70%', marginTop: '5%' }}>
          <img src={lastSecimg} alt="lastImg" />
        </div>
        {/* <div className="acpNewarrowDiv" style={{marginTop:'5%', marginBottom:'0%'}}>
          <Link to={'/products/liquor/RoyalPride'} className="acppremiumleftArrowDiv">
            <div className="acpNewLeftDiv">
              <h1 className="damnarrowHeading">Royal Pride</h1>
              <HiArrowLongLeft className="leftIconImg" />
            </div>
            <div>
              <img src={acblack} alt="block" className="acpNewleftSmallImg" />
            </div>
          </Link>
          <Link to={'/products/liquor/AcDryGin'} className="acppremiumrightArrowDiv">
            <div>
              <img src={damnscotch} alt="block"  className="acpNewrightSmallImg" />
            </div>
            <div className="acpNewRightDiv">
              <h1 className="damnarrowHeading">Aristocrat Dry Gin</h1>
              <HiOutlineArrowLongRight  className="leftIconImg" />
            </div>
          </Link>
        </div> */}
                        <div className="acpNewarrowDiv">
                    <Link to={'/products/liquor/royalpride'} className="acppremiumleftArrowDiv">
                        <div className="acpNewLeftDiv">
                            <h1 className="acpNpremiumarrowHeading">Royal Pride</h1>
                            <HiArrowLongLeft className="leftIconImg" />
                        </div>
                        <div className="acpNewleftSmallImg">
                            <img src={RoyalPride} alt="block" />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/iicevodka'} className="acppremiumrightArrowDiv">
                        <div className="acpNewrightSmallImg" >
                            <img src={iceVodka} alt="block" />
                        </div>
                        <div className="acpNewRightDiv">
                            <h1 className="acpNpremiumarrowHeading">Iice Vodka</h1>
                            <HiOutlineArrowLongRight className="leftIconImg" />
                        </div>
                    </Link>
                </div> 
      </div>
    </section>
  )
}