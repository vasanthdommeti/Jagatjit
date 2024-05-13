
import React, { useRef, useLayoutEffect } from "react";
import '../Home/Home.css';
import section3Image from '../../Assets/Home/sec3bottleImg.png';
import distilImage from '../../Assets/Home/distilImage.png';
import brewImage from '../../Assets/Home/brewingImage.png';
import storageImage from '../../Assets/Home/storageImage.png';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import acpsecond from '../../Assets/Home/SectionTwoImages/royalPride.png';
import mapImage from '../../Assets/Home/sec6backgroundImg.png';
// import LogoIcon from '../../Assests/LogoIcon.png'


function Home() {
    gsap.registerPlugin(ScrollTrigger);

    const imagesBlock = [
        { 'id': 1, 'header': 'ROYAL PRIDE', 'paragraph': 'EXQUISTITE WHISKEY', 'subParagraph': 'Reinvent yourself with Every Sip.', 'src': acpsecond }
    ]

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
                height: '100vh',
            });


            tl.add([firstTimeline]);


        }, [wrapperRef, firstRef]);

        return () => ctx.revert();
    }, []);
    // ref={wrapperRef}
    return (
        <div className="App" ref={wrapperRef}>
            {/* //1 */}
            <section className="main" data-pin="true"  >
                <div id='sectionImage1' className='sectionBottleDiv' >
                    <div className="sectionImage1Div">
                        <h1 className="section1Heading">Brewing Magic</h1>
                        <h1 className="section1subHeading">Since 1994</h1>
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
            {/* <section>
                <div id='sectionImage2' className='section2'>
                    <div className='section3MainDiv' style={{flexDirection:'row-reverse'}}>
                    <div>
                        <h1>{imagesBlock[0].header}</h1>
                        <p>{imagesBlock[0].paragraph}</p>
                        <p>{imagesBlock[0].subParagraph}</p>
                        <button>read more</button>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <img src={imagesBlock[0].src} alt="bottle" style={{height:'400px'}}/>
                        <div>images block</div>
                    </div>
                    </div>
                </div>
            </section> */}
            {/* /3/  completed*/} 
            <section id='sectionImage3' className='section1'>
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
            <section>
                <div id='sectionImage4' className='section1'>
                </div>
            </section>
            {/* //5 complete */}
            <section id='sectionImage5'>
                {/* <div id='sectionImage5' > */}
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
                {/* </div> */}
            </section>
            <section>
                {/* <div id='sectionImage6' className='section'>
                </div> */}
                <div style={{height:'100vh'}}>
                <h1 className='section6Header'>JIL's Presence & Reach</h1>
                <img src={mapImage} alt="mapImage" style={{width:'100%'}}/>
                </div>

            </section>
        </div>
    )
}

export default Home;
