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
import { MdBorderAll } from 'react-icons/md'

export const Heritage = () => {

    const timeline = [
        {
          date: '1944',
          image : year1944,
          desc: 'The Company incorporated as "Jagatjit Distillery & Allied Industries Ltd.” In Kapurthala under the patronage of its Maharaja, H.E Sardar Jagatjit Singh.',
        },
        {
          date: '1948',
          image : year1948,
          desc: 'The first Distillery plant was set up in Kapurthala.',
        },
        {
          date: '1953',
          image : year1953,
          desc: 'Entered into an agreement with Schweppes Overseas Ltd. & Pepsi Cola Ltd. to set up bottling & soft drinks plant.',
        },
        {
          date: '1968',
          image : year1968,
          desc: 'Hyderabad brewery Ltd. was bought over. A new health drink by the name of VIVA was launched.',
        },
        {
          date: '1973',
          image : null,
          desc: 'Glass plant set up as a separate company  with the name of ‘Universal Glass Ltd’',
        },
        {
          date: '1976',
          image : year1976,
          desc: 'MALTOVA - New Product Launch',
        },
        {
          date: '1982',
          image : null,
          desc: 'Maltova & Aristocrat Premium Malt Whisky awarded Gold Medal, by MONDE (World) selection held in London.',
        },
        {
            date: '1985',
            image : null,
            desc: 'Aristocrat Premium Malt was launched.',
        },
        {
            date: '1995',
            image : year1995,
            desc: "Hiram Walker launched- Teacher's Scotch Whisky.",
        },
        {
            date: '1999',
            image : year1999,
            desc: 'Aristocrat Whisky, Bonnie  & Binnies entered the Millionaire Club.',
        },
        {
            date: '2002',
            image : year2002,
            desc: 'AC Black and AC SEKC Whisky was launched.',
        },
        {
            date: '2006',
            image : null,
            desc: 'ACP Whisky enters Millionaire Club',
        },
        {
            date: '2010',
            image : null,
            desc: 'AC Black crosses Million mark.',
        },
        {
            date: '2011',
            image : year2011,
            desc: 'IICE Vodka is launched.',
        },
        {
            date: '2013',
            image : year2013,
            desc: 'IICE Vodka wins Gold at MONDE SELECTION QUALITY INSTITUTION Belgium.',
        },
        {
            date: '2016',
            image : year2016,
            desc: '',
        },
        {
            date: '2020',
            image : null,
            desc: 'Introducing ACP Aristocrat HAND SANITIZER WITH 70% ALCOHOL and Humaste HAND SANITIZER WITH 70% ALCOHOL & Aloe-Vera.',
        },
        {
            date: '2024',
            image : year20241,
            desc: '',
        },
        {
            date: '2024',
            image : year20242,
            desc: 'AC Black and Damn Good Scotch has won The Ambrosia Awards in the Product Category.',
        },

      ];
    
    return(
        <div style={{margin : '10%'}}>
            <h1 className="heritage-heading">
                Heritage
            </h1>
            <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginTop : '2%'}}>
                <div style={{textAlign : 'justify'}}>
                    Jagatjit Industries was founded in 1944 by the Late Mr LP Jaiswal in the erstwhile state of Kapurthala, under the patronage of its Maharaja, Jagatjit Singh. Jagatjit Chemical and Pharmaceutical Works and the Jagatjit Laboratories were established in 1946, and the distillery began operations in 1948. The company then obtained a license for the annual manufacture of malt extract of 1800 tons, the largest in the country at the time,and started production in 1963. 
                </div>
                <div style={{paddingLeft : '5%'}}>
                    <img src={mainImg1} />
                </div>
            </div>
            <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginTop : '2%'}}>
                <div>
                    <img src={mainImg2} />
                </div>
                <div style={{ paddingLeft : '5%', textAlign : 'justify'}}>
                    The next few decades saw the development and introduction of several premium brands of liquor (including the iconic Aristocrat and Teachers whiskies), as well as malted milk food (Ovaltine/Maltova), which cemented the company’s pioneering position in the industry, and delivered on its promise of a ‘Heritage of Quality’. In 2023, JIL got approval for its Ethanol plant.
                </div>
            </div>
            <div style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', marginTop : '2%'}}>
                <div style={{textAlign : 'justify'}}>
                    In 2015, Roshini Sanah Jaiswal took over as Promoter and Chief Restructuring Officer at Jagatjit Industries Limited (JIL), carrying forward a seventy-one-year-old legacy created by her father and grandfather. She has successfully leveraged that rich heritage by upgrading the company’s technology and automation capabilities to increase efficiency, ensuring future-ready agility and catalyzing dynamism in thought and deed.
                </div>
                <div style={{paddingLeft : '5%'}}>
                    <img src={mainImg3} />
                </div>
            </div>
            <div style={{margin : '5%'}}>
                <h1 className="heritage-heading">
                    Milestones
                </h1>
                <VerticalTimeline>
                    {timeline.map((t, i) => {
                    return (
                        <VerticalTimelineElement
                            key={i}
                            contentStyle={{ background: "black"}}
                            contentArrowStyle={{ borderRight: "white" }}
                            iconStyle={{ background: "white" }}
                            className="timeLine"
                        >
                            <div>
                                {t.image && <img src={t.image} style={{ height : '90%', width : '90%'}}/>}
                                <p style={{color : 'white', fontSize : 32, fontWeight : 'bolder'}}>{t.date}</p>
                                <p style={{color : 'white', fontFamily : 'Josefin Sans'}}>{t.desc}</p>
                            </div>
                        </VerticalTimelineElement>
                    )})}
                </VerticalTimeline>
            </div>
        </div>
    )
};
