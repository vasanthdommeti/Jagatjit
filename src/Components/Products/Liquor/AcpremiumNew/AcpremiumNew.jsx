



import React, { useEffect, useState } from "react";
import "../AcpremiumNew/AcpremiumNew.css";
import { HiArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

import curtainImg from '../../../../Assets/Products/Liquor/AcpremiumOld/sectionCurtain.png';
import flavourImgs from '../../../../Assets/Products/Liquor/AcpremiumNew/bottleimgsec.png';
import flavourGroupimg from '../../../../Assets/Products/Liquor/AcpremiumNew/groupimgfav.png';
import bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/bottle.svg';
import distik from '../../../../Assets/Products/Liquor/AcpremiumOld/distik.svg';
import glass from '../../../../Assets/Products/Liquor/AcpremiumOld/glass.png';
import acpsectiononelogo from '../../../../Assets/Products/Liquor/AcpremiumNew/acpsectiononelogo.png';
import acpsectiontwoimg from '../../../../Assets/Products/Liquor/AcpremiumNew/acpremiumsecBottleImg.png';
import acpblack from '../../../../Assets/Products/Liquor/AcpremiumNew/acblackImg.png';
import acpnewImg from '../../../../Assets/Products/Liquor/AcpremiumNew/acpnewImg.png';
import acplast from '../../../../Assets/Products/Liquor/AcpremiumNew/AcpProducts.png';
import acpsectiontwoimgs from '../../../../Assets/Products/Liquor/AcpremiumNew/acpnewImg.png';
import bendFavImg from '../../../../Assets/Products/Liquor/AcpremiumNew/bendfavimg.png';
import axios from "axios";

export const AcpremiumNew = () => {
    const [scrVideo, setScrVideo] = useState("");
    useEffect(() => {
        axios.get('https://api.jagatjit.com/api/videos')
            .then(response => {
                let data = response.data.data.find((el) => {
                    return el.name == "AC PREMIUM NEW"
                });

                setScrVideo(data.video_file)
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div>
            {/* //1 */}
            <div className=" acpNewpagesRowDiv acpSecondPageSectionOneImage">
                <div className="acpNewTextDiv">
                    <h2 className="aristocratSecondHeading">THE ALL NEW</h2>
                    <img src={acpsectiononelogo} alt="bottleImg" className="acpNewlogoImg1" />
                    <p className="aristocratParagraph">One of India's most-loved whiskey brands with its iconic gold and deep-red bottle. Now Revamped. </p>
                </div>
                <img src={acpsectiontwoimgs} alt="bottleImg" className="acpbottleImg" />
            </div>
            {/* //2 */}
            <div className="acpnewpagesTextDivTwo acpNewScondSectionTwoImage">
                <img src={acpsectiontwoimg} alt="bottleImg" className="acpNewImg1" />
                <div className="acpnewpagesTextDiv">
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
            {/* //3 */}
            <section className="acpNsectionThree">
                <div><img src={curtainImg} alt="leftCurtain" className="image" /></div>
                <div className="acpNflavourDiv">
                    <h1 className="acpNflavourDivHeader">FLAVOUR PROFILE</h1>
                    <div className="acpNewFavIconImgDiv">
                        <div class="profileN-icon-wrap">
                            <div class="profileN-icon-1">Elegant and Long Lasting</div>
                            <div class="profileN-icon-2">Sweet, Floral with a touch of spices</div>
                            <div class="profileN-icon-3">Deep Gold to the eyes</div>
                            <div class="profileN-icon-4">Smooth, with a hint of Fruit & Spices</div>
                        </div>
                        <picture>
                            <source media="(max-width:767px)" srcset={bendFavImg} />
                            <img src={flavourGroupimg} alt="Flowers" className="acpfavsectImg" />
                        </picture>

                        {/* <img src={flavourGroupimg} alt="groupBtl" className="acpfavsectImg" /> */}

                    </div>
                </div>
                <div><img src={curtainImg} alt="rightCurtain" className="curtainImage image" /></div>
            </section>
            {/* //4 */}

            {/* <div className="acpnewHide">
                    <h2 className="pagesTextFavorDivHeader">BEYOND LUXURY LIES LEGACY.</h2>
                </div> */}
            <section className="acpoldsecondfourthSectionImage">
                <div className="acpNewpagesTextbetween">
                    <h2 className="acpNpagesTextFavorDivHeader">BEYOND LUXURY LIES LEGACY.</h2>
                </div>
                <div className="rowIconVisible">
                    <div className="imageText">
                        <img src={glass} alt="bottleImg" className="acpnewlogoText" />
                        <div>
                            <p className="acpNlogoTextParagraph">Best Enjoyed How You Like Your Whiskey</p>
                        </div>
                    </div>
                    <div className="imageText">
                        <img src={bottle} alt="bottleImg" className="acpnewlogoText botleImg2" />
                        <div>
                            <p className="acpNlogoTextParagraph">Bottled With Care By State Of The Art Bottling Facilities</p>
                        </div>
                    </div>
                    <div className="imageText">
                        <img src={distik} alt="bottleImg" className="acpnewlogoText" />
                        <div>
                            <p className="acpNlogoTextParagraph">Made With The Finest Indian Spirits</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* //5 */}
            <div className="acppremiumfifthhDiv">
                {scrVideo && (
                    <video
                        className="videoContent"
                        width="100%"
                        height="80%"
                        // controls
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src={scrVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', marginTop: '1%' }}>
                    <Link to={'/products/liquor/DamnGoodScotch'} className="acppremiumleftArrowDiv">
                        <div style={{ textAlign: 'right', alignSelf: 'center', }}>
                            <h1 className="acppremiumarrowHeading">Aristocrat Premium (OLD)</h1>
                            <HiArrowLongLeft style={{ fontSize: '55px' }} />
                        </div>
                        <div>
                            <img src={acpnewImg} alt="block" style={{ height: '80px', marginLeft: '25px', marginRight: '25px' }} />
                        </div>
                    </Link>
                    <Link to={'/products/liquor/RoyalMedallion'} className="acppremiumrightArrowDiv">
                        <div>
                            <img src={acpblack} alt="block" style={{ height: '80px', marginRight: '5px' }} />
                        </div>
                        <div style={{ textAlign: 'left', alignSelf: 'center' }}>
                            <h1 className="acppremiumarrowHeading">Aristocrat Black</h1>
                            <HiOutlineArrowLongRight style={{ fontSize: '55px' }} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

