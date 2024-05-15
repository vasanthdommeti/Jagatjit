import React from 'react';
import '../GlobalPresence/GlobalPresence.css';
import worldgain from '../../Assets/GlobalPresence/worldagainn.svg';

export const GlobalPresence = () => {
    return (
        <section className="globalMainDiv">
    <h1 className="global-presence">Global Presence</h1>

<p className="global-text" style={{marginTop:'8%'}}>
  JIL’s brands are popular in India as well as globally. JIL made its foray into the international markets a few years ago, and now exports to several countries including Ghana, Angola, Guinea, Zambia, Nigeria, Kenya, Congo, Togo, Mauritius, Mali, UAE, Oman, USA, Singapore, Italy, and South Africa. This list is set to expand further. Every product we manufacture complies with the International Organization for Standardization for Quality Management System and Food Safety Standard. </p>
  <ul className="global-text">
    <p>JIL’s international brand portfolio is customized according to the demand and future growth potential of the products being exported in their respective markets.</p>
    <li> JIL has customized pack sizes for specific markets. </li>
    <li> JIL undertakes contract manufacturing/bottling of third-party private label brands of international customers. </li>
    <li> JIL supplies whiskey spirit in bulk for bottling at other locations. The bulk spirit is shipped in HDPE Barrels, IBCs and ISO Flexi Tanks. </li>
  </ul>
  <p className="global-text">
    For international queries, please <a href="mailto:jilexport@jagatjit.com">click here</a>.
  </p>


<div className="picture">
  <img src={worldgain} alt="JIL Products" className="picture" />
</div>
        </section>
    )
}