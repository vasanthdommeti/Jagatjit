import React, { useRef, useEffect , useLayoutEffect} from "react";
import './Section.css'
import section3Image from '../../Assests/section3Image.png';
import distilImage from '../../Assests/distilImage.png';
import brewImage from '../../Assests/brewingImage.png';
import storageImage from '../../Assests/storageImage.png';
import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import acpproduct from '../../Assests/AcpremiumNew/acpSecondpageend.png';
// import LogoIcon from '../../Assests/LogoIcon.png'
// import royalbrandy from '../../Assests/royalbrandy.jpeg';
// import scotch from '../../Assests/scotch.jpeg';
// import jin from '../../Assests/jin.jpeg';
// import whiskeyblack from '../../Assests/whiskeyblack/jpeg';
// import aristoWhiskey from '../../Assests/aristoWhiskey.jpeg';
// import vodka from '../../Assests/vodka.jpeg';
// import gin from '../../Assests/gin.jpeg';


function Section() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);

  useEffect(() => {
      const element = ref.current;
      gsap.fromTo(
        element.querySelector(".imageContainer1"),
        {
          scale: 1.4,
          rotation: 30,
          x: 500,
          y: 200,
        },
        {
          scale: 0.8,
          rotation: 0,
          x: 1000,
          y: 0,
          scrollTrigger: {
            trigger: element.querySelector("#sectionImage1"),
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
            pin: true
          },
        }
      );
  
    }, []);

    return (
        <div className="App" ref={ref}>
            <div id='sectionImage1' className='section'>
              <img className="imageContainer1" src="/acpNewBottle.png" alt="hell"/>
            </div>
            <div id='sectionImage2' className='section'>
                <img src={acpproduct} alt='Img' className='section3Image' />
            </div>
            <div id='sectionImage3' className='section'>
                <div className='section3MainDiv'>
                    <div className='section3GroupHeaderDiv'>
                        <h1 className='section3Header'>We sold over</h1>
                        <h1 style={{ color: '#ECA533' }} className='section3Header'>30 Billion Cases</h1> 
                            <h1 className='section3Header'>of our favorite </h1>
                            <h1 className='section3Header'>Whiskey.</h1>
                        <p className='section3Paragraph'>Explore our history to find out how we did it.</p>
                        <button className='section3Button'>OUR STORY</button>
                    </div>
                    <div className='section3GroupImagesDiv'>
                        <img src={section3Image} alt='Img' className='section3Image'/>
                    </div>
                </div>
            </div>
            <div id='sectionImage4' className='section'>
            </div>
            <div id='sectionImage5' className='section'>
            <div className='section3MainDiv'>
                    <div className='section3GroupHeaderDiv'>
                        <h1 className='section5Header'>Where does all the</h1>
                        <h1 className='section5Header'>magic come from ?</h1>
                        <button className='section3Button'>OUR PROCESS</button>
                    </div>
                    <div className='section5GroupImagesDiv'>
                        <div className='section5firstImage'>
                            <img src={brewImage} alt='Img' className='section5Image' />
                        </div>
                        <div className='section5secondImage'>
                            <img src={distilImage} alt='Img' className='section5Image' />
                            <img src={storageImage} alt='Img' className='section5Image' />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='section6Header'>JIL's Presence & Reach</h1>
            <div id='sectionImage6' className='section'>
            </div>
        </div>

    )
}

export default Section;




                {/* <div style={{ width: 40, height: 50 }}>
                    <img src={vodka} alt='fisrst' />
                </div> */}
                {/* <div>
                    <div>
                        <h2>ROYAL PRIDE</h2>
                        <h4>EXQUISITE WHISKEY</h4>
                        <p>Reinvent yourself with Every Sip.</p>
                        <button>READ MORE</button>
                    </div>
                    <div>
                        list of bottles
                    </div>
                </div> */}