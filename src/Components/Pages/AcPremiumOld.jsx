
import React from "react";
import "../Pages/Styles.css";
import Image from 'react-bootstrap/Image';
import acpremiumBgImage from '../../Assests/acpremiumfirstsection.png'
import acpremium from '../../Assests/acpremium.png';
import curtainImg from '../../Assests/Products/sectionCurtain.png';
import flavourImg from '../../Assests/Products/sectionFlavours.png';
import aritoPremium from '../../Assests/Products/aristoprembg.png';
import bottle from '../../Assests/Products/bottles.png';
import distik from '../../Assests/Products/distik.png';
import glass from '../../Assests/Products/glass.png';
import acpProduct from '../../Assests/Products/AcpProducts.png';
export default function Acpremiumold() {
    return (
        <div>
            <div className="pagesRowDiv acpremiumfirstSectionImage">
                <div className="pagesTextDiv">
                    <img src={acpremium} alt="bottleImg" style={{ height: '40%', width: '50%' }} />
                    <h2 className="aristocratSecondHeading">CLASSIC WHISKEY</h2>
                    <p className="aristocratParagraph">One of India's most-loved whiskey brands with</p>
                    <p className="aristocratParagraph">its iconic gold and deep-red bottle.</p>
                </div>
            </div>
            <div className="pagesTextDivTwo acpremiumsecondSectionImage">
                <div className="pagesTextDiv">
                    <div className="pageSecondText">
                        <h1 className="sectionTwoHeading">THE ESSENCE OF</h1>
                        <h1 className="sectionTwoHeading">SOPHISTICATION</h1>
                    </div>
                    <div>
                        <p className="sectionTwoParagraph">Distinctive and refined in both taste and look, it is</p>
                        <p className="sectionTwoParagraph">blended with pure grain and select imported</p>
                        <p className="sectionTwoParagraph">Scotch malts, bringing a <span>honeyed and delightful</span></p>
                        <p className="sectionTwoParagraph"><span>experince</span> to its loyal patrons</p>
                    </div>
                </div>

            </div>
            <section className="sectionThree">
                <div><img src={curtainImg} alt="leftCurtain" className="image" /></div>
                <div className="flavourDiv">
                    <h1 className="flavourDivHeader">FLAVOUR PROFILE</h1>
                    <img src={flavourImg} alt="flavours" className="image" />
                </div>
                <div><img src={curtainImg} alt="rightCurtain" className="curtainImage image" /></div>
            </section>
            <section className="pagesRowDiv acpremiumfourthSectionImage">
                <div className="pagesTextFavorDiv">
                    <h2 className="pagesTextFavorDivHeader">BEYOND LUXURY LIES LEGACY.</h2>
                    <div className="imageText">
                        <img src={glass} alt="bottleImg" className="logoText" />
                        <div>
                            <p className="logoTextParagraph">Best Enjoyed How You</p>
                            <p className="logoTextParagraph">Like Your Scotch</p>
                        </div>
                    </div>
                    <div className="imageText">
                        <img src={bottle} alt="bottleImg" className="logoText" />
                        <div>
                            <p className="logoTextParagraph">Best Enjoyed How You</p>
                            <p className="logoTextParagraph">Like Your Scotch</p>
                        </div>
                    </div>
                    <div className="imageText">
                        <img src={distik} alt="bottleImg" className="logoText" />
                        <div>
                            <p className="logoTextParagraph">Best Enjoyed How You</p>
                            <p className="logoTextParagraph">Like Your Scotch</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img src={acpProduct} alt="acpProduct" style={{ height: '100%', width: '100%' }} />
            </section>
        </div>
    )
};

