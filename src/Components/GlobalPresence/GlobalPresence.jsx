import React, { useRef, useLayoutEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip } from 'react-tooltip'
import '../GlobalPresence/GlobalPresence.css';
import worldgain from '../../Assets/GlobalPresence/worldagainn.svg';

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


export const GlobalPresence = () => {
  const [content, setContent] = useState("");

  const isHighlightedCountry = (countryName) => {
    return markers.some(marker => marker.name.includes(countryName));
  };  

    return (
        <section className="globalMainDiv">
    <h1 className="global-presence">Global Presence</h1>

<p className="global-text" style={{marginTop:'2%'}}>
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


  <div style={{ height: '90vh' }}>
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
                                        <circle r={7} fill="#fff"  />
                                    </a>
                                </Marker>
                            ))}
                        </ComposableMap>
                    </div>
                </div>
            </div>
        </section>
    )
}