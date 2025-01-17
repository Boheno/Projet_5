
import imageHome from "../assets/Image-source-1.png"
import imageAbout from "../assets/Image-source-2.png"
import PropTypes from "prop-types";

function Banner ({ page }) {
    let BannerImages = {
        Home: imageHome,
        About: imageAbout,
    }
    let imageSrc = BannerImages[page]

    let BannerText = {
        Home: "Chez vous, partout et ailleurs",
    }
    let textBanner = BannerText[page] || ""

    return (
        <div className="banner">
            <img className={ `${page}-content-banner`} src={imageSrc} alt={`${page}-content-banner`}  />
            <span className="text-banner">{textBanner}</span>
        </div>
    ) 
}
Banner.propTypes = {
    page: PropTypes.string,
}
export default Banner