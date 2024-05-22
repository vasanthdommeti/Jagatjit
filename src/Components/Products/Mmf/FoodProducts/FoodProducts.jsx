
import React from "react";
import '../FoodProducts/FoodProducts.css';
import milkproducts from '../../../../Assets/Products/Mmf/milkfood.png';
import mainImg from '../../../../Assets/Products/Mmf/foodproducts.png';

export const FoodProducts = () => {
    return (
        <section className="foodbodySection">
            <div className="foodSectionDiv">
                <img src={mainImg} alt="img" />
                <h1 className="foodtexthead">Food Products</h1>
            </div>
            <div className="foodparaone">
                <p>Jagatjit Industries Limited’s food division is versatile and diverse. JIL has a malt house, malt extract plant, a modern dairy and a malted milk food manufacturing unit. The malted milk food division has two units with a capacity to manufacture 120 tons per day of high quality malted milk food. JIL manufactures primer malted milk food for Unilever formerly know as GlaxoSmithKline Consumer Healthcare Ltd’s makers of Boost, Maltova and Horlicks, the leading brands in the country. Our own brands, Champion and Compleat are exported and loved in international markets.</p>
            </div>

            <div>
                <h1 className="foodtextheadsmall">Malt</h1>
                <div className="foodparaonelast">
                    <p>The modern malt house produces malt from the best barley sourced after strict inspection, and undergoing our quality control processes from select farms which produce the best grains in Punjab. This malt is used to meet JIL’s own requirements in both the malted milk food division and the distillery division.
                    </p>
                    <p style={{ marginTop: '2%' }}>
                        All three grades of malt made by JIL – food, distillery & brewery grade – are sold in the domestic and international markets. JIL enjoys a well-earned reputation for the quality of its malt extract, meeting the high standards demanded by customers like Kraft Foods Ltd., Cadbury (India) Ltd., GlaxoSmithKline Consumer Healthcare Ltd., Kellogg India Ltd., AB Foods Ltd. (Thailand) and more.
                    </p>
                </div>
            </div>

            <div>
                <h1 className="foodtextheadsmall">Dairy</h1>
                <div className="foodparaonelast">
                    <p>The dairy plant produces milk powder, dairy whitener, baby food, malt extract powder, malted milk food (spray dried) and clarified butter or ‘pure ghee’.</p>
                </div>
            </div>

            <section className="smartmilksec">
                <div>
                    <h1 className="foodtextheadsmall">Smart Milk</h1>
                    <div className="foodparaonelast">
                    <p>This nutritious malt-based food product manufactured by us is supplied to the Indian army for its personnel. It is available in the domestic market as well as exported.</p>
                    </div>
                </div>
                <div>
                    <img src={milkproducts} alt="Smart milk product" className="smartmilkimg" />
                </div>
            </section>
        </section>
    )
}
