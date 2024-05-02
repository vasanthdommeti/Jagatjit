import React from 'react';
import './Section.css'
import section3Image from '../../Assests/section3Image.png';
// import LogoIcon from '../../Assests/LogoIcon.png'
// import royalbrandy from '../../Assests/royalbrandy.jpeg';
// import scotch from '../../Assests/scotch.jpeg';
// import jin from '../../Assests/jin.jpeg';
// import whiskeyblack from '../../Assests/whiskeyblack/jpeg';
// import aristoWhiskey from '../../Assests/aristoWhiskey.jpeg';
// import vodka from '../../Assests/vodka.jpeg';
// import gin from '../../Assests/gin.jpeg';


function Section() {

    return (
        <div>
            <div id='sectionImage1' className='section'>

            </div>
            <div id='sectionImage2' className='section'>
            </div>
            <div id='sectionImage3' className='section'>
                <div className='section3MainDiv'>
                    <div className='section3GroupHeaderDiv'>
                        <h1>We sold over</h1>
                            <h3>30 Billion Cases</h3> 
                            <h1>of our favorite </h1>
                            <h1>Whiskey.</h1>
                        <p>Explore our history to find out how we did it.</p>
                        <button>OUR STORY</button>
                    </div>
                    <div className='section3GroupImagesDiv'>
                        <img src={section3Image} alt='Img' className='section3Image'/>
                    </div>
                </div>
            </div>
            <div id='sectionImage4' className='section'>
            </div>
            <div id='sectionImage5' className='section'>
            </div>
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