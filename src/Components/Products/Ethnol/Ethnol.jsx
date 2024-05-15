import React from "react";
import '../Ethnol/Ethnol.css'
import bio from '../../../Assets/Products/Ethnol/biotank.png';
import grains from '../../../Assets/Products/Ethnol/grains.png';
import drop from '../../../Assets/Products/Ethnol/waterdrop.png';

export const Ethanol = () => {
    return ( 
        <section>
            <div className="ethanolfirstDiv">
                <h1 className="ethanolHeading">Manufacturing</h1>
                <h1 className="ethanolHeading">Grain-Based Ethanol</h1>
            </div>
            <div style={{ paddingLeft: '5%', paddingRight: '5%', marginTop:'10%'}}>
                <h1 className="ethanolsubHeading">
                    What is Ethanol?
                </h1>
                <p className="maltparagraph">
                    Ethanol is a green, low-carbon fuel. Also known as ethyl alcohol or grain alcohol, it is a versatile substance with a surprising number of uses. One of those various uses is blending ethanol with petrol reduces air pollution considerably.
                </p>
            </div>
            <div className="mainlogoContent">
                <div className="logoContent">
                    <img src={grains} className="logoImgDrop" />
                    <p className="logoTxt">
                        Made from Rice and Maiz
                    </p>
                </div>
                <div className="logoContent">
                    <img src={bio} className="logoImgDrop" />
                    <p className="logoTxt"> 
                        Bio Fuel with low carbon emmisions
                    </p>
                </div>
                <div className="logoContent">
                    <img src={drop} className="logoImgDrop" />
                    <p className="logoTxt">
                        Cleaner and Sustainable
                    </p>
                </div>
            </div>
            <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingBottom: '10%' }}>
                <h1 className="ethanolsubHeading">
                    How we manufacture Ethanol?
                </h1>
                <p className="maltparagraph">
                    JIL manufactures ethanol from rice grains and maize in a greenfield manufacturing facility at Hamira, Kapurthala district, Punjab, spread across 25 acres. It has the capacity to produce 200 kilolitres of Ethanol per day (200 KLPD) for supply to oil marketing companies. A production capacity of this size and scale underscores our commitment to sustainability by providing environmentally friendly fuel alternatives for India.
                </p>
                <p className="maltparagraph">
                    This is especially so, because our Ethanol production has received exclusive approval from the Government for supply to governmental entities only, aligning with the Government's strategic plan for blending Ethanol with petrol.
                </p>
                <p className="maltparagraph">
                    The primary raw materials for our Ethanol production process are rice grains. This choice is part of our strategic approach to utilize renewable resources and promote agricultural sustainability, providing more jobs, cleaner air, and contributing to a sustainable future.
                </p>
            </div>
        </section>
    )
}

{/* <section>
    <div><br /><span>
        What is Ethanol?
        <br /><br /></span><span>
            Ethanol is a green, low-carbon fuel. Also known as ethyl alcohol or grain alcohol, it is a versatile substance with a surprising number of uses. One of those various uses is blending ethanol with petrol reduces air pollution considerably.
        </span></div>
    <div ><span ><br /></span><span>
        How we manufacture Ethanol?
        <br /><br /></span><span>
            JIL manufactures ethanol from rice grains and maize in a greenfield manufacturing facility at Hamira, Kapurthala district, Punjab, spread across 25 acres. It has the capacity to produce 200 kilolitres of Ethanol per day (200 KLPD) for supply to oil marketing companies. A production capacity of this size and scale underscores our commitment to sustainability by providing environmentally friendly fuel alternatives for India.
            <br /><br />
            This is especially so, because our Ethanol production has received exclusive approval from the Government for supply to governmental entities only, aligning with the Government's strategic plan for blending Ethanol with petrol.
        </span></div>
    <div>
        The primary raw materials for our Ethanol production process are rice grains. This choice is part of our strategic approach to utilize renewable resources and promote agricultural sustainability, providing more jobs, cleaner air, and contributing to a sustainable future.

    </div>


    <div ><span>Made from Rice and Maiz</span><span >e</span></div>

    <div>Bio Fuel with low carbon emmisions</div>
</section> */}