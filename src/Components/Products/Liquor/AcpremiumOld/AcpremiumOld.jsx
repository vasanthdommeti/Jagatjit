import '../AcpremiumOld/AcpremiumOld.css'
import sc1logo from '../../../../Assets/Products/Liquor/AcpremiumOld/sc1logo.png'
import sc1bottle from '../../../../Assets/Products/Liquor/AcpremiumOld/sc1bottle.png'

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
                    <img src={sc1bottle} alt="wide-image" srcset="" />
                </div>
            </div>
        </section>
    )
}

export default AcPremiumOld