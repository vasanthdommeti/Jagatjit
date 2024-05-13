import '../AcpremiumOld/AcpremiumOld.css'
import sc1logo from '../../../../Assets/Products/Liquor/AcpremiumOld/sc1logo.png'
import sc1bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/sc1bottle.png'
import sc1bottlesmall from '../../../../Assets/Products/Liquor/AcpremiumOld/s1bottlesmall.png'

const AcPremiumOld = () => {
    return (
        <section className="top-wide-banner">
            <div className="wide-image-back">
            </div>
            <div className="top-image-container">
                <div className="wide-text-wrap">
                    <img className='banner-logo' src={sc1logo} srcset="" alt="banner-logo" />
                    <h3 className="banner-title">CLASSIC WHISKEY</h3>
                    <p className="banner-summary">One of India's most-loved whiskey brands with its iconic gold and deep-red bottle,</p>
                </div>
                <div className="wide-image-wrap">
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet={sc1bottlesmall}
                            sizes="768px"
                        />
                        <source
                            srcSet={sc1bottle}
                            sizes="1280px"
                        />
                        <img src={sc1bottle} />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default AcPremiumOld