
import React, { useRef, useLayoutEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip } from 'react-tooltip'
import '../Home/Home.css';
import { Link } from "react-router-dom";
import section3Image from '../../Assets/Home/sec3bottleImg.png';
import distilImage from '../../Assets/Home/distilImage.png';
import brewImage from '../../Assets/Home/brewingImage.png';
import storageImage from '../../Assets/Home/storageImage.png';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import mapImage from '../../Assets/Home/sec6backgroundImg.png';

import image1 from '../../Assets/Home/SectionThreeImages/sec1.svg';
import image2 from '../../Assets/Home/SectionThreeImages/sec2.svg';
import image3 from '../../Assets/Home/SectionThreeImages/sec3.svg';
import imagemob1 from '../../Assets/Home/SectionThreeImages/secmob1.svg';
import imagemob2 from '../../Assets/Home/SectionThreeImages/secmob2.svg';
import imagemob3 from '../../Assets/Home/SectionThreeImages/secmob3.svg';

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

const markers = [
    {
        name: "Angola",
        coordinates: [17.8739, -11.2027]
    },
    {
        name: "United Arab Emirates",
        coordinates: [53.8478, 23.4241]
    },
    {
        name: "Democratic Republic of the Congo",
        coordinates: [21.7587, -4.0383]
    },
    {
        name: "Ghana",
        coordinates: [-1.0232, 7.9465]
    },
    {
        name: "Guinea",
        coordinates: [-9.6966, 9.9456]
    },
    {
        name: "India",
        coordinates: [78.9629, 20.5937]
    },
    {
        name: "Italy",
        coordinates: [12.5674, 41.8719]
    },
    {
        name: "Kenya",
        coordinates: [36.8219, -1.2921]
    },
    {
        name: "Mali",
        coordinates: [-3.9962, 17.5707]
    },
    {
        name: "Oman",
        coordinates: [55.9754, 21.4735]
    },
    {
        name: "Togo",
        coordinates: [0.8248, 8.6195]
    },
    {
        name: "United States",
        coordinates: [-95.7129, 37.0902]
    },
    {
        name: "South Africa",
        coordinates: [22.9375, -30.5595]
    },
    {
        name: "Zambia",
        coordinates: [27.8493, -13.1339]
    },
    {
        name: "Mauritius",
        coordinates: [57.5522, -20.3484]
    },
    {
        name: "Singapore",
        coordinates: [103.8198, 1.3521]
    }
];

function Home() {
    const [data, setData] = useState(section[0]);
    const [content, setContent] = useState("");

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
                marginTop: getMarginTop(),
                marginLeft: getMarginLeft(),
            }, {
                scale: 0.7,
                rotate: 0,
                marginTop: getMarginTopReset(),
                marginLeft: getMarginLeftreset(),
                // height: '100vh',
            });
            function getMarginTop() {
                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                if (vw < 768) {
                    return '30vh';
                } else if (vw >= 768 && vw < 1024) {
                    return '25vh';
                } else {
                    return '35vh';
                }
            }
            function getMarginLeft() {
                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                if (vw < 768) {
                    return '20vw';
                } else if (vw >= 768 && vw < 1024) {
                    return '30vw';
                } else {
                    return '35vw';
                }
            }
            function getMarginTopReset() {
                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                if (vw < 768) {
                    return '40vh';
                } else if (vw >= 768 && vw < 1024) {
                    return '20vh';
                } else {
                    return '15vh';
                }
            }
            function getMarginLeftreset() {
                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
                if (vw < 768) {
                    return '35vw';
                } else if (vw >= 768 && vw < 1024) {
                    return '70vw';
                } else {
                    return '75vw';
                }
            }
            tl.add([firstTimeline]);
        }, [wrapperRef, firstRef]);

        return () => ctx.revert();
    }, []);

    const isHighlightedCountry = (countryName) => {
        return markers.some(marker => marker.name.includes(countryName));
    };

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
                        <img src={data.largeImg} alt="bottle" className="section2img" />
                        <div className="secion2TextWrap">
                            <div className="sectionThreeHeadDiv">
                                <h1 className="btnheading">{data.name}</h1>
                                <p className="btnsubheading">{data.heading}</p>
                                <p className="btnparagraph"> {data.para}</p>
                                <Link to={data.link}>
                                    <button className='section3Button'>Read More</button>
                                </Link>
                            </div>
                            <div className="sectionThreeImageDiv">
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
                            <picture>
                                <source media="(max-width: 767px)" srcset={imagemob1} />
                                <img src={image1} class="d-block w-100" alt="image1" />
                            </picture>
                        </div>
                        <div class="carousel-item">
                        <picture>
                            <source media="(max-width: 767px)" srcset={imagemob2} />
                            <img src={image2} class="d-block w-100" alt="image2" />
                        </picture>
                        </div>
                        <div class="carousel-item">
                            <picture>
                                <source media="(max-width: 767px)" srcset={imagemob3} />
                                <img src={image3} class="d-block w-100" alt="image3" />
                            </picture>
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
                <div className="mapContainerDiv">
                    <Tooltip id="my-tooltip" />
                    <div>
                        <ComposableMap data-tooltip-id="my-tooltip" data-tooltip-content={content} className="imageMapContainer">
                            <Geographies geography="/features.json">
                                {({ geographies }) =>
                                    geographies.map((geo) => {
                                        const { name } = geo.properties;
                                        const isHighlighted = isHighlightedCountry(name);

                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                style={{
                                                    default: {
                                                        fill: isHighlighted ? "#D38A14" : "gray",
                                                        outline: "none"
                                                    },
                                                    hover: {
                                                        fill: isHighlighted ? "#D38A14" : "gray",
                                                        outline: "none"
                                                    },
                                                    pressed: {
                                                        fill: isHighlighted ? "#D38A14" : "gray",
                                                        outline: "none"
                                                    }
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>
                            {markers.map(({ name, coordinates }) => (
                                <Marker key={name} coordinates={coordinates}>
                                    <a data-tooltip-id="my-tooltip" data-tooltip-content={name}>
                                        <circle r={10} fill="#fff" stroke="gray" strokeWidth={2} />
                                    </a>
                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
