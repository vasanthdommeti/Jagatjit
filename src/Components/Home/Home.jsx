
import React, { useRef, useLayoutEffect, useState } from "react";
import '../Home/Home.css';
import { Link } from "react-router-dom";
import section3Image from '../../Assets/Home/sec3bottleImg.png';
import distilImage from '../../Assets/Home/distilImage.png';
import brewImage from '../../Assets/Home/brewingImage.png';
import storageImage from '../../Assets/Home/storageImage.png';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import mapImage from '../../Assets/Home/sec6backgroundImg.png';

import image1 from '../../Assets/Home/SectionThreeImages/sec1.png';
import image2 from '../../Assets/Home/SectionThreeImages/sec2.png';
import image3 from '../../Assets/Home/SectionThreeImages/sec3.png';

import candle from '../../Assets/Products/Liquor/RoyalPride/candle.png';
import hotglass from '../../Assets/Products/Liquor/RoyalPride/hotglass.png';
import lipglass from '../../Assets/Products/Liquor/RoyalPride/lipglass.png';
import glass from '../../Assets/Products/Liquor/RoyalPride/glass.png';
import royalpridethirdImg from '../../Assets/Products/Liquor/RoyalPride/royalpridethirdimg.png'
// import LogoIcon from '../../Assests/LogoIcon.png'

import bottle2 from '../../Assets/Home/SectionTwoImages/bottle1.png';
import bottle3 from '../../Assets/Home/SectionTwoImages/bottle2.png';
import bottle4 from '../../Assets/Home/SectionTwoImages/bottle3.png';
import bottle5 from '../../Assets/Home/SectionTwoImages/bottle4.png';
import bottle1 from '../../Assets/Home/SectionTwoImages/bottle5.png';
import bottle6 from '../../Assets/Home/SectionTwoImages/bottle6.png';
import bottle7 from '../../Assets/Home/SectionTwoImages/bottle7.png';

import bottle2main from '../../Assets/Home/SectionTwoImages/bottle1main.png';
import bottle3main from '../../Assets/Home/SectionTwoImages/bottle2main.png';
import bottle4main from '../../Assets/Home/SectionTwoImages/bottle3main.png';
import bottle5main from '../../Assets/Home/SectionTwoImages/bottle4main.png';
import bottle1main from '../../Assets/Home/SectionTwoImages/bottle5main.png';
import bottle6main from '../../Assets/Home/SectionTwoImages/bottle6main.png';
import bottle7main from '../../Assets/Home/SectionTwoImages/bottle7main.png';

const section = [
    {
        id: 1,
        name: 'ROYAL PRIDE',
        heading: "EXQUISITE WHISKEY",
        para: "Reinvent yourself with Every sip.",
        smallImg: bottle1,
        largeImg: bottle1main,
        link: '/products/liquor/RoyalPride',
    },
    {
        id: 2,
        name: 'ARISTOCAT',
        heading: "PREMIUM WHISKEY",
        para: "One of india's most loved whiskey.",
        smallImg: bottle2,
        largeImg: bottle2main,
        link: 'products/liquor/ACpremiumNew',
    },
    {
        id: 3,
        name: 'ARISTOCRAT',
        heading: "PREMIUM WHISKEY",
        para: "Old is gold, our best in the most recognixable bottle.",
        smallImg: bottle3,
        largeImg: bottle3main,
        link: '/products/liquor/ACpremiumOld',
    },
    {
        id: 4,
        name: 'DAMN GOOD SCOTCH',
        heading: "",
        para: "A drink made for kings.",
        smallImg: bottle4,
        largeImg: bottle4main,
        link: '/products/liquor/DamnGoodScotch',
    },
    {
        id: 5,
        name: 'AC BLACK',
        heading: "EXQUISITE WHISKEY",
        para: "Just endless possibilities.",
        smallImg: bottle5,
        largeImg: bottle5main,
        link: '/products/liquor/ACpremiumBlack',
    },
    {
        id: 6,
        name: 'ROYAL MEDALLION',
        heading: "FRENCH XO BRANDY",
        para: "Heritage of Quality.",
        smallImg: bottle6,
        largeImg: bottle6main,
        link: '/products/liquor/RoyalPride',
    },
    {
        id: 7,
        name: 'IICE VODKA',
        heading: "",
        para: "Like I Like it",
        smallImg: bottle7,
        largeImg: bottle7main,
        link: '/products/liquor/IiceVodka',
    }
]

function Home() {
    const [data, setData] = useState(section[0])
    gsap.registerPlugin(ScrollTrigger);

    const firstRef = useRef(null);

    const wrapperRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context((self) => {
            const tl = gsap
                .timeline({
                    defaults: {
                        ease: "none",
                    },
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        pin: true,
                        scrub: 1.5,
                        end: () => "+=" + wrapperRef.current.offsetWidth,
                    },
                });

            // Timeline for firstRef
            const firstTimeline = gsap.timeline().fromTo(firstRef.current, {
                scale: 1.6,
                rotate: '30deg',
                marginTop: '35vh',
                marginLeft: '35vw',
            }, {
                scale: 0.7,
                rotate: 0,
                marginTop: '10vh',
                marginLeft: '75vw',
                // height: '100vh',
            });


            tl.add([firstTimeline]);


        }, [wrapperRef, firstRef]);

        return () => ctx.revert();
    }, []);

    return (
        <div className="App" ref={wrapperRef}>
            {/* //1 */}
            <section className="main" data-pin="true"  >
                <div id='sectionImage1' className='sectionBottleDiv' >
                    <div className="sectionImage1Div">
                        <h1 className="section1Heading">Brewing Magic</h1>
                        <h1 className="section1subHeading">Since 1944</h1>
                        <p className="section1paragraph">Explore our curated selection of</p>
                        <p className="section1paragraph">premium liquor</p>
                        <button className='section3Button'>BROWSE MORE</button>
                    </div>
                    <img
                        ref={firstRef}
                        className="imageContainer1"
                        src="/acpNewBottle.png"
                        alt="hell"
                    />
                </div>
            </section>

            {/* //2 */}
            <section >
                <div id='sectionImage2' className='section2'>
                    <div className='section3MainDiv'>
                        <img src={data.largeImg} alt="bottle" style={{ height: '450px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                            <div> 
                                <h1 className="btnheading">{data.name}</h1>
                                <p className="btnsubheading">{data.heading}</p>
                                <p className="btnparagraph"> {data.para}</p>
                                <Link to={data.link}>
                                    <button className='section3Button'>Read More</button>
                                </Link>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <div className="smallImgDiv">
                                    {section.map((e) => (
                                        <button className="smallImgButton" onClick={() => setData(e)}>
                                            <img src={e.smallImg} alt="bottle" style={{ height: '80px' }} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /3/  completed*/}
            <section id='sectionImage3' className='section1' >
                {/* <div className='sectionThreeMainDiv'> */}
                <div className='section3GroupHeaderDiv'>
                    <h1 className='section3Header'>We sold over</h1>
                    <h1 style={{ color: '#ECA533' }} className='section3Header'>30 Billion Cases</h1>
                    <h1 className='section3Header'>of our favorite </h1>
                    <h1 className='section3Header'>Whiskey.</h1>
                    <p className='section3Paragraph'>Explore our history to find out how we did it.</p>
                    <button className='section3Button'>OUR STORY</button>
                </div>
                <div className='section3GroupImagesDiv'>
                    <img src={section3Image} alt='Img' className='section3Image' />
                </div>
                {/* </div> */}
            </section>
            {/* //4 */}
            {/* <section style={{display:'flex',overflow:'scroll', flex:'1', flexDirection:'row'}}>
                <div id='sectionImage4' className='section1'>
                <div className="section6firstThirdDiv">
                <div className="section6firstThirdDivContent">
                    <div style={{ alignItems: 'flex-end', display: 'flex', paddingTop: '5%', }}>
                        <img src={royalpridethirdImg} alt="image" style={{ height: '100vh' }} />
                    </div>
                    <div style={{ padding: '5%' }}>
                        <h1 className="section6firstthirdDivLine">
                            ROYAL PRIDE
                        </h1>
                        <p className="btnsubheading" style={{textAlign:'center'}}>EXQUISITE WHISKEY</p>
                        <p className="subparaheading">Reinvent<span> yourself </span> with every <span>sip</span></p>
                        <button className='section4Button' style={{marginLeft:'30%'}}>FIND OUT MORE</button>
                        <div className="section6firstrowdiv">
                            <div className="section6firstcandleimagesingle">
                                <img src={candle} alt="block" />
                                <p>Deep Gold</p>
                            </div>
                            <div className="section6firstcandleimagesingle" style={{ marginTop: '2%' }}>
                                <img src={lipglass} alt="block" />
                                <p>Light on the Palate with flavors of roasted malt & spices</p>
                            </div>
                            <div className="section6firstcandleimagesingle">
                                <img src={hotglass} alt="block" />
                                <p>Malty Notes. Subtly Spicy</p>
                            </div>
                            <div className="section6firstcandleimagesingle" style={{ marginLeft: '2%' }}>
                                <img src={glass} alt="block" />
                                <p>Elegant and Full Bodied</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                <div id='sectionImage4' className='section1'>
                <div className="section6firstThirdDiv">
                <div className="section6firstThirdDivContent">
                    <div style={{ alignItems: 'flex-end', display: 'flex', paddingTop: '5%', }}>
                        <img src={royalpridethirdImg} alt="image" style={{ height: '100vh' }} />
                    </div>
                    <div style={{ padding: '5%' }}>
                        <h1 className="section6firstthirdDivLine">
                            ROYAL PRIDE
                        </h1>
                        <p className="btnsubheading" style={{textAlign:'center'}}>EXQUISITE WHISKEY</p>
                        <p className="subparaheading">Reinvent<span> yourself </span> with every <span>sip</span></p>
                        <button className='section4Button' style={{marginLeft:'30%'}}>FIND OUT MORE</button>
                        <div className="section6firstrowdiv">
                            <div className="section6firstcandleimagesingle">
                                <img src={candle} alt="block" />
                                <p>Deep Gold</p>
                            </div>
                            <div className="section6firstcandleimagesingle" style={{ marginTop: '2%' }}>
                                <img src={lipglass} alt="block" />
                                <p>Light on the Palate with flavors of roasted malt & spices</p>
                            </div>
                            <div className="section6firstcandleimagesingle">
                                <img src={hotglass} alt="block" />
                                <p>Malty Notes. Subtly Spicy</p>
                            </div>
                            <div className="section6firstcandleimagesingle" style={{ marginLeft: '2%' }}>
                                <img src={glass} alt="block" />
                                <p>Elegant and Full Bodied</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section> */}

            <section className="section1">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={image1} class="d-block w-100" alt="image1" />
                        </div>
                        <div class="carousel-item">
                            <img src={image2} class="d-block w-100" alt="image2" />
                        </div>
                        <div class="carousel-item">
                            <img src={image3} class="d-block w-100" alt="image3" />
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button> */}
                    {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
                </div>
            </section>
            {/* //5 complete */}
            <section id='sectionImage5'>
                {/* <div id='sectionImage5' > */}
                <div className='section3MainDiv'>
                    <div className='section3GroupHeaderDiv'>
                        <h1 className='section5Header'>Where does all the</h1>
                        <h1 className='section5Header'>magic come from ?</h1>
                        <Link to={'/our-Process'}>
                            <button className='section3Button'>OUR PROCESS</button>
                        </Link>
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
                {/* </div> */}
            </section>
            {/* //6 */}

            <div style={{ height: '100vh' }}>
                <h1 className='section6Header'>JIL's Presence & Reach</h1>
                <img src={mapImage} alt="mapImage" style={{ width: '100%' }} />
            </div>
        </div>
    )
}

export default Home;
