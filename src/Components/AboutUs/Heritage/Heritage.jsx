import year1944 from '../../../Assets/AboutUs/heritage/1944.png'
import year1948 from '../../../Assets/AboutUs/heritage/1948.png'
import year1953 from '../../../Assets/AboutUs/heritage/1953.png'
import year1968 from '../../../Assets/AboutUs/heritage/1968.png'
import year1976 from '../../../Assets/AboutUs/heritage/1976.png'
import year1995 from '../../../Assets/AboutUs/heritage/1995.png'
import year1999 from '../../../Assets/AboutUs/heritage/1999.png'
import year2002 from '../../../Assets/AboutUs/heritage/2002.png'
import year2011 from '../../../Assets/AboutUs/heritage/2011.png'
import year2013 from '../../../Assets/AboutUs/heritage/2013.png'
import year2016 from '../../../Assets/AboutUs/heritage/2016.png'
import year20241 from '../../../Assets/AboutUs/heritage/2024(1).png'
import year20242 from '../../../Assets/AboutUs/heritage/2024(2).png'
import mainImg1 from '../../../Assets/AboutUs/heritage/mainImg1.png'
import mainImg2 from '../../../Assets/AboutUs/heritage/mainImg2.png'
import mainImg3 from '../../../Assets/AboutUs/heritage/mainImg3.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Heritage.css'

export const Heritage = () => {

    const timeline = [
        {
            id: 1,
            date: '1944',
            image: year1944,
            desc: 'The Company incorporated as "Jagatjit Distillery & Allied Industries Ltd.” In Kapurthala under the patronage of its Maharaja, H.E Sardar Jagatjit Singh.',
        },
        {
            id: 2,
            date: '1948',
            image: year1948,
            desc: 'The first Distillery plant was set up in Kapurthala.',
        },
        {
            id: 3,
            date: '1953',
            image: year1953,
            desc: 'Entered into an agreement with Schweppes Overseas Ltd. & Pepsi Cola Ltd. to set up bottling & soft drinks plant.',
        },
        {
            id: 4,
            date: '1968',
            image: year1968,
            desc: 'Hyderabad brewery Ltd. was bought over. A new health drink by the name of VIVA was launched.',
        },
        {
            id: 5,
            date: '1973',
            image: null,
            desc: 'Glass plant set up as a separate company  with the name of ‘Universal Glass Ltd’',
        },
        {
            id: 6,
            date: '1976',
            image: year1976,
            desc: 'MALTOVA - New Product Launch',
        },
        {
            id: 7,
            date: '1982',
            image: null,
            desc: 'Maltova & Aristocrat Premium Malt Whisky awarded Gold Medal, by MONDE (World) selection held in London.',
        },
        {
            id: 8,
            date: '1985',
            image: null,
            desc: 'Aristocrat Premium Malt was launched.',
        },
        {
            id: 9,
            date: '1995',
            image: year1995,
            desc: "Hiram Walker launched- Teacher's Scotch Whisky.",
        },
        {
            id: 10,
            date: '1999',
            image: year1999,
            desc: 'Aristocrat Whisky, Bonnie  & Binnies entered the Millionaire Club.',
        },
        {
            id: 11,
            date: '2002',
            image: year2002,
            desc: 'AC Black and AC SEKC Whisky was launched.',
        },
        {
            id: 12,
            date: '2006',
            image: null,
            desc: 'ACP Whisky enters Millionaire Club',
        },
        {
            id: 13,
            date: '2010',
            image: null,
            desc: 'AC Black crosses Million mark.',
        },
        {
            id: 14,
            date: '2011',
            image: year2011,
            desc: 'IICE Vodka is launched.',
        },
        {
            id: 15,
            date: '2013',
            image: year2013,
            desc: 'IICE Vodka wins Gold at MONDE SELECTION QUALITY INSTITUTION Belgium.',
        },
        {
            id: 16,
            date: '2016',
            image: year2016,
            desc: 'Ms. Roshini Sanah Jaiswal won the ‘Entrepreneur of the year’ Award at Indspirit 2016 (The mega Alcobev Trade Event). <br/>• IICE Vodka won the Gold Award for Standard Product of the Year at Indspirit 2016 (The mega Alcobev Trade Event). <br/>• AC Black Whisky in Packaging category won the Gold award at Indspirit 2016 (The mega Alcobev Trade Event).<br/><br/><br/><br/><br/>',
        },
        {
            id: 17,
            date: '2020',
            image: null,
            desc: 'Introducing ACP Aristocrat HAND SANITIZER WITH 70% ALCOHOL and Humaste HAND SANITIZER WITH 70% ALCOHOL & Aloe-Vera.',
        },
        {
            id: 18,
            date: '2024',
            image: year20241,
            desc: 'Ms.Roshini Sanah Jaiswal has been honoured as the “Family Entrepreneur of the Year at The ET Entrepreneur Awards 2024”.',
        },
        {
            id: 19,
            date: '2024',
            image: year20242,
            desc: 'AC Black and Damn Good Scotch has won The Ambrosia Awards in the Product Category.',
        },

    ];

    return (
        <div style={{ margin: '10%' }}>
            <h1 className="heritage-heading">
                Heritage
            </h1>
            <div className="topinfoimg">
                <div style={{ textAlign: 'justify' }}>
                    Jagatjit Industries was founded in 1944 by the Late Mr LP Jaiswal in the erstwhile state of Kapurthala, under the patronage of its Maharaja, Jagatjit Singh. Jagatjit Chemical and Pharmaceutical Works and the Jagatjit Laboratories were established in 1946, and the distillery began operations in 1948. The company then obtained a license for the annual manufacture of malt extract of 1800 tons, the largest in the country at the time,and started production in 1963.
                </div>
                <div className="topimgage">
                    <img src={mainImg1} />
                </div>
            </div>
            <div className="topinfoimgtwo">
                <div className="topimgagetwo">
                    <img src={mainImg2} />
                </div>
                <div className="topinfoimg">
                    <div style={{ textAlign: 'justify' }}>
                        The next few decades saw the development and introduction of several premium brands of liquor (including the iconic Aristocrat and Teachers whiskies), as well as malted milk food (Ovaltine/Maltova), which cemented the company’s pioneering position in the industry, and delivered on its promise of a ‘Heritage of Quality’. In 2023, JIL got approval for its Ethanol plant.
                    </div>
                </div>
            </div>
            <div className="topinfoimg">
                <div style={{ textAlign: 'justify' }}>
                    In 2015, Roshini Sanah Jaiswal took over as Promoter and Chief Restructuring Officer at Jagatjit Industries Limited (JIL), carrying forward a seventy-one-year-old legacy created by her father and grandfather. She has successfully leveraged that rich heritage by upgrading the company’s technology and automation capabilities to increase efficiency, ensuring future-ready agility and catalyzing dynamism in thought and deed.
                </div>
                <div className="topimgage">
                    <img src={mainImg3} />
                </div>
            </div>
            <div className="topinfoimglast">
                <div style={{ textAlign: 'justify' }}>
                    Jagatjit Industries Limited (JIL) is now one of world’s leaders in the premium drinks segment. We have the largest integrated distilleries manufacturing potable alcohol in Asia; and in India, we are the first to possess in-house capabilities for producing molasses and non-molasses based potable alcohol from fully automated distillation plants. JIL manufactures and markets alcoholic beverages, malt, malt extract, nutritious planned food, milk powder, ghee, and dairy products. We also manufacture malted milk foods. JIL’s guiding philosophy – ‘A Heritage of Quality’ – finds expression through all the company’s activities: quality in manufacturing, state-of-the-art-technology, and enduring relationships with employees, dealers and customers.
                </div>
            </div>
            <div style={{ textAlign: 'justify' }}>
                <h1 className="heritage-headingtwo">
                    Milestones
                </h1>
                <VerticalTimeline>
                    {timeline.map((t, i) => {
                        return (
                            <VerticalTimelineElement
                                key={i}
                                contentStyle={{ background: "black" }}
                                contentArrowStyle={{ borderRight: "white" }}
                                iconStyle={{ background: "white" }}
                                className="timeLine"
                            >
                                <div>
                                    {t.image && <img src={t.image} style={{ height: '90%', width: '90%' }} />}
                                    <p style={{ color: 'white', fontSize: 32, fontWeight: 'bolder' }}>{t.date}</p>
                                    {t.id != 16 ? (
                                        <p style={{ color: 'white', fontFamily: 'Josefin Sans' }}>{t.desc}</p>
                                    ) : (
                                        <div>
                                            Ms. Roshini Sanah Jaiswal won the ‘Entrepreneur of the year’ Award at Indspirit 2016 (The mega Alcobev Trade Event). <br />• IICE Vodka won the Gold Award for Standard Product of the Year at Indspirit 2016 (The mega Alcobev Trade Event). <br />• AC Black Whisky in Packaging category won the Gold award at Indspirit 2016 (The mega Alcobev Trade Event).<br /><br /><br /><br /><br />
                                        </div>
                                    )}
                                </div>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </div>
            {/* <div className='toBeContinuedMain'>
                <div className='toBeContinued'>
                    <h1 style={{ textAlign: 'center' }}>To Be Continued</h1>
                </div>
            </div> */}

            <div className='toBeContinuedMain'>
                <h1 className='continuedText'>To Be Continued</h1>
            </div>
        </div>
    )
};
