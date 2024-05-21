import React, { useEffect, useRef } from 'react';
import './OurProcess.css';
import bg1 from '../../Assets/OurProcess/bg1.png';
import bg2 from '../../Assets/OurProcess/bg2.png';
import bg3 from '../../Assets/OurProcess/bg3.png';
import bg4 from '../../Assets/OurProcess/bg4.png';

const FadeInOnScroll = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInZoom'); // Add animation class on intersection
        } else {
          entry.target.classList.remove('fadeInZoom'); // Remove animation class if not intersecting
        }
      });
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect(); // Cleanup function on unmount
  }, []);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
};

export default FadeInOnScroll;

export const OurProcess = () => {
  return (
    <section className='ourProcessMainDiv'>
      <div className="ourProcess-process-container">
        <h4>OUR PROCESS</h4>
        <h1 className="ourProcess-process-title-main">From Humble Grain to Liquid Gold</h1>
        <p>6500 kilometers away from Scotland, JIL brings outstanding whiskeys to life for the discerning drinker. To create this magical spirit, we combine the best of Scottish tradition, a world-className team of experienced distillers and blenders, and state-of-the-art,R&D-based, high quality, technology-led production, distilling, blending and bottling processes. Every step in the production process for whiskey and other liquor is seamless and powered by the very latest and best industry standards and equipment from India and abroad. The state-of-the-art technology, the first ever in India, is imported from M/S JP International, Finland (formerly known as Alko, Finland). The modern bulkgrain-based alcohol-producing ENA plant has 17 pot stills of the best design and cutting-edge technological knowhow. Our four-stage inspection system ensures quality and excellence in the final product. This helps JIL produce 3.6 million litres of the finest Indian malt spirit per annum.
JIL’s Quality Management Systems comply with the International Organisation for Standardization for Quality Management System and Food Safety Standard. The process parameters of our distillation plant are controlled through Distributed Control Systems supplied by Emerson to ensure consistent quality of the product. During the period 06.09.2010, TUV SUD South Asia Private Limited, Member of the TUV SUD Group, Germany issued a Certificate of ISO 9001 : 2008 vide  Registration No.99 100 11984 dated 06.09.2010 for Quality Management System. During the period 16.07.2013,  Den Norske Veritas Certification B.V, the Netherlands issued a Certificate of ISO 22000:2005 vide Registration No.138969 – 2013 – AFSMS-IND-RvA dated 16.07.2013 for Food Safety Standard.</p>
      </div>

      <FadeInOnScroll>
        <div className="ourProcess-process-wrappers">
          <div className="ourProcess-process-image">
            <img src={bg1} alt="distillery" />
          </div>
          <div className="ourProcess-process-description" style={{ textAlign: 'right', marginRight:'5%' }}>
            <h1 className="ourProcess-process-title">State-of-the-Art Distillery</h1>
            <p className="ourProcess-pre-blending-description">State-of-the-Art Distillery JIL’s hyper-modern and efficient multi-pressure distillation plant is set up with equipment supplied by the best national and international manufacturers. The pot stills are made from thick copper plate and yield a particularly smooth and pure spirit.</p>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="ourProcess-process-wrapper">
          <div className="ourProcess-process-description" style={{ textAlign: 'left', marginLeft:'5%'}}>
            <h1 className="ourProcess-process-title">Pre-Blending & Bottling</h1>
            <p className="ourProcess-pre-blending-description">
              At JIL we know that the storage of whisky prior to blending and bottling is crucial to produce a truly elegant whisky. For this, we have 30,000 oak wood casks, (imported from the best cooperages in Scotland) resting in our cool, dark and damp warehouses. ...
            </p>
          </div>
          <div className="ourProcess-process-image">
            <img src={bg2} alt="distillery"/>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="ourProcess-process-wrappers">
          <div className="ourProcess-process-image">
            <img src={bg3} alt="distillery"/>
          </div>
          <div className="ourProcess-process-description" style={{ textAlign: 'right', marginRight:'5%'}}>
            <h1 className="ourProcess-process-title">Brewing Facilities</h1>
            <p className="ourProcess-pre-blending-description">Jagatjit has an automated state-of-the-art brewing facility based on German technology. Our equipment is supplied by the best plant and machinery suppliers in the world.</p>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <div className="ourProcess-process-wrapper">
          <div className="ourProcess-process-description" style={{ textAlign: 'left', marginLeft:'5%'}}>
            <h1 className="ourProcess-process-title">High Tech Bottling Hall</h1>
            <p className="ourProcess-pre-blending-description">The grains used for the production of our spirit and beers are the finest available in India, and our malt is specially imported from Scotland.</p>
          </div>
          <div className="ourProcess-process-image">
            <img src={bg4} alt="distillery" />
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll>
      <div className="ourProcess-process-description" style={{paddingLeft: '5%', paddingRight: '5%', marginBottom: '5%'}}>
        <h1 className="ourProcess-process-title">Plants and Units</h1>
        <p>Large scale production and processing of alcohol takes place at JIL’s own modern manufacturing units in the States of Rajasthan (Behror), and Goa. The company has a state-of-the-art manufacturing and distillation base which is located at Jagatjit Nagar, Kapurthala District in the State of Punjab. Since its establishment in 1971, the R&amp;D unit has safeguarded the consistent quality of our products, and fueled better processes to enhance and streamline new product development and reduce costs by improving production yields. JIL has company-owned plants and collaborations with bottlers all over India giving it a truly national presence.Address:&nbsp;Jagatjit Nagar, Hamira, Kapurthala Dist, 144802, Punjab, India</p>
      </div>
      </FadeInOnScroll>

      
    </section>
  );
};

