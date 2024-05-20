import React, { useEffect, useState } from "react";
import axios from "axios";
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
import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottles.png';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.png';
import glasss from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.png';
import drums from '../../../../Assets/Products/Liquor/RoyalPride/drums.png';
import { Link } from "react-router-dom";

export const DamnScotch = () => {

  const [scrVideo, setScrVideo] = useState("");
  useEffect(() => {
    axios.get('https://api.jagatjit.com/api/videos')
      .then(response => {
        let data = response.data.data.find((el) => {
          return el.name == "DAMN GOOD SCOTCH"
        });

        setScrVideo(data.video_file)
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <section>
      {/* //1st cursive pending */}
      <div className="damnFirstDiv">
        <div style={{ display: 'flex', alignSelf: 'center', paddingLeft: '7%', paddingRight: '5%' }}>
          <div className="damnImgcontent">
            <img src={firstSecimg} alt="acblack" style={{ width: '100%' }} />
          </div>
          <div className="damnRowContent">
            <h1 className="damnHeading">
              DAMN GOOD SCOTCH
            </h1>
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
          <p className="damnParagraph">
            A Scotch whisky of rare character, KING HENRY VIII truly lives up to its name.
          </p>
        </div>
      </div>
      {/* //3rd */}
      <img src={candles} alt="block" className="royalcandleimagehide" />
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
              <div className="damncandleimagesingle">
                <img src={candle} alt="block" />
                <p>Amber</p>
              </div>
              <div className="damncandleimagesingle" style={{ marginTop: '2%' }}>
                <img src={lipglass} alt="block" />
                <p>Delicate, smooth and long-lasting</p>
              </div>
              <div className="damncandleimagesingle">
                <img src={hotglass} alt="block" />
                <p>Medium-bodied, mildly sweet, nutty and malty flavors faintly floral, with trace notes of honey and fruit</p>
              </div>
              <div className="damncandleimagesingle" style={{ marginLeft: '2%' }}>
                <img src={glass} alt="block" />
                <p>Malt, vanilla, fruity, lightly smoky and peaty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //4 */}

      <div className="royalpridehide">
        <div className="royalimageText">
          <img src={glasss} alt="block" className="royallogoimage" />
          <p>Best enjoyed how you like your scotch</p>
        </div>
        <div className="royalimageText">
          <img src={bottle} alt="block" className="royallogoimage" />
          <p>Bottled With Care By State Of the art bottling facilities</p>
        </div>
        <div className="royalimageText">
          <img src={distik} alt="block" className="royallogoimage" />
          <p>Made with the finest indian spirits</p>
        </div>

      </div>
      <div className="damnFourthDiv">
        <div className="damnForthDivContent royalprideshow" >
          <h1 className="damnSecondDivHeading" >Aged for 3 years in</h1>
          <h1 className="damnSecondDivHeading" >The Scottish Highlands</h1>
          <div className="damnimageText" style={{ marginTop: '5%' }}>
            <img src={glasss} alt="block" className="damnlogoimage" />
            <p>Best Enjoyed How You Like Your Scotch</p>
          </div>
          <div className="damnimageText">
            <img src={bottle} alt="block" className="damnlogoimage" style={{ marginRight: '12%', marginLeft: '3%' }} />
            <p>Bottled with care by state of the art bottling facilities</p>
          </div>
          <div className="damnlogodrumsimage">
            <img src={drums} alt="block" className="damnlogoimage" style={{ marginRight: '-3%', marginTop: '-10%', marginLeft: '-2%' }} />
            <p>Made with the finest Indian spirits</p>
          </div>

        </div>
      </div>
      {/* ///5 completed*/}
      <div className="damFifthDiv" >
        <div style={{ justifyContent: 'center', display: 'flex', height: '50%', marginTop: '5%' }}>
          <img src={lastSecimg} alt="lastImg" />
        </div>
        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', marginTop: '5%' }}>
          <Link to={'/products/liquor/RoyalPride'} className="damnleftArrowDiv">
            <div style={{ textAlign: 'right', alignSelf: 'center', }}>
              <h1 className="damnarrowHeading">Royal Pride</h1>
              <HiArrowLongLeft style={{ fontSize: '55px' }} />
            </div>
            <div>
              <img src={acblack} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
            </div>
          </Link>
          <Link to={'/products/liquor/AcDryGin'} className="damnrightArrowDiv">
            <div>
              <img src={damnscotch} alt="block" style={{ height: '150px', marginLeft: '25px', marginRight: '25px' }} />
            </div>
            <div style={{ textAlign: 'left', alignSelf: 'center' }}>
              <h1 className="damnarrowHeading">Aristocrat Dry Gin</h1>
              <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}