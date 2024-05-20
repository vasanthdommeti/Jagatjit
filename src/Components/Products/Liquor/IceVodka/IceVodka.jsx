
import React from "react";
import '../IceVodka/IceVodka.css';

import vodka1 from '../../../../Assets/Products/Liquor/Vodka/vodka1.svg';
import iconBite from '../../../../Assets/Products/Liquor/Vodka/icon4-bite.svg';
import iconBare from '../../../../Assets/Products/Liquor/Vodka/icon4-bare.svg';
import iconorange from '../../../../Assets/Products/Liquor/Vodka/icon4-orange.svg';
import vodka2 from '../../../../Assets/Products/Liquor/Vodka/vodka2.png';
import vodka3 from '../../../../Assets/Products/Liquor/Vodka/vodka3.png';
import vodka4 from '../../../../Assets/Products/Liquor/Vodka/vodka4.png';
import bareitvod from '../../../../Assets/Products/Liquor/Vodka/bareitvod.png';
import vodkainfo1 from '../../../../Assets/Products/Liquor/Vodka/vodkainfo1.svg';
import vodkainfo2 from '../../../../Assets/Products/Liquor/Vodka/vodkainfo2.png';
import vodkainfo3 from '../../../../Assets/Products/Liquor/Vodka/vodkainfo3.svg';
import applevod from '../../../../Assets/Products/Liquor/Vodka/applevod.png';
import orangevid from '../../../../Assets/Products/Liquor/Vodka/orangevid.png';
import vodbg from '../../../../Assets/Products/Liquor/Vodka/vodbg.png';
import vodkatrio from '../../../../Assets/Products/Liquor/Vodka/vodkatrio.png';
import vodkafamily from '../../../../Assets/Products/Liquor/Vodka/vodkafamily.png';

export const IceVodka = () => {
    return (
        <section className="mainVodkaSection">
  <section className="image-container">
    <img src={vodka1} alt="Vodka 1" className="vodka-image" />
    <img src={vodka2} alt="Vodka 2" className="vodka-image" />
  </section>
  <section className="image-container container-2">
    <img src={vodka3} alt="Vodka 3" />
    <img src={vodka4} alt="Vodka 4" className="vodka-imagess" />
  </section>
  <section className="split-section container-3">
    <div className="image-container">
      <img src={bareitvod} alt="IICE Vodka" className="split-image" />
    </div>
    <div className="content-container">
      <h1 className="bare-it-all">Bare It All</h1>
      <p className="info-text">
        The plain variant of IICE Vodka, Bare It All, has clean, fresh notes and is smooth and mellow on the tongue.
      </p>
      <picture>
        <source media="(max-width:767px)" srcset={iconBare} />
        <img src={vodkainfo1} alt="Vodka Information" className="info-image" />
      </picture>
    </div>
  </section>

  <section className="split-sections">
  
    <div className="content-containers">
      <h1 className="bite-the-apple">Bite the apple</h1>
      <p className="info-text">
        With every sip you take of this flavored variant of IICE Vodka, you feel like you're biting into a fresh green apple. Made from natural ingredients, clear and smooth, with no added sugar, fresh and fruity to the end.
      </p>
      <picture>
        <source media="(max-width:767px)" srcset={iconBite} />
        <img src={vodkainfo2} alt="Vodka Information" className="info-image"/>
      </picture>
    </div>
    <div className="image-container">
      <img src={applevod} alt="IICE Vodka" className="split-image" />
    </div>
  </section>

  <section className="split-sectionss">
    <div className="image-container">
      <img src={orangevid} alt="IICE Vodka" className="split-image" />
    </div>
    <div className="content-container">
      <h1 className="bare-it-all">Undress The Orange</h1>
      <p className="info-text">
        Undress the Orange is a variant of IICE Vodka that delivers the freshness of a juicy orange with every drink. Popular among folks who savor a good cocktail with a zesty and citrus-based vibe.
      </p>

      <picture>
        <source media="(max-width:767px)" srcset={iconorange} />
        <img src={vodkainfo3} alt="Vodka Information" className="info-image" />
      </picture>
    </div>
  </section>
  <section className="full-image-container">
    <img src={vodkatrio} alt="Vodka Trio" className="full-image" />
  </section>
  <section>
    <img src={vodkafamily} alt="Vodka Trio" className="full-image" />
  </section>
</section>
    )
}