import React, { useRef, useLayoutEffect } from "react";
import './Home.css'
import section3Image from '../../Assests/section3Image.png';
import distilImage from '../../Assests/distilImage.png';
import brewImage from '../../Assests/brewingImage.png';
import storageImage from '../../Assests/storageImage.png';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import LogoIcon from '../../Assests/LogoIcon.png'


function Home() {
    gsap.registerPlugin(ScrollTrigger);

    const firstRef = useRef(null);
    const secondRef = useRef(null);

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

    return (
        <div className="App" ref={wrapperRef}>
            <section className="main" data-pin="true">
                <div id='sectionImage1' className='sectionBottleDiv'>
                    <img
                        ref={firstRef}
                        className="imageContainer1"
                        src="/acpNewBottle.png"
                        alt="hell"
                    />
                </div>
            </section>
            <section>
                <div id='sectionImage2' className='section'>
                </div>
            </section>
            <section>
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
                            <img src={section3Image} alt='Img' className='section3Image' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id='sectionImage4' className='section'>
                </div>
            </section>
            <section>
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
            </section>
            <h1 className='section6Header'>JIL's Presence & Reach</h1>
            <section>
                <div id='sectionImage6' className='section'>
                </div>
            </section>
        </div>
    )
}

export default Home;
