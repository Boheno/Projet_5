import { useState } from "react";
import PropTypes from "prop-types";

function Carousel ({images}) {
    let [currentIndex, setCurrentIndex] = useState(0)
    let nextImage = () => {
        setCurrentIndex((prevIndex)=> (prevIndex +1) %images.length)
    }
    let prevImage = () => {
        setCurrentIndex ((prevIndex) => (prevIndex -1 + images.length) %images.length)
    }

return (
    <div className="carousel-container">
        {images.length > 1 && ( 
        <button onClick={prevImage} className="carousel-button-prev">&#8249;</button>
        )}
        <div className="carousel-image">
            <img src={images[currentIndex]} alt={images.title} />
        </div>
        {images.length > 1 && ( 
        <button onClick={nextImage} className="carousel-button-next">&#8250;</button>
        )}
        {images.length > 1 && ( 
        <div className="carousel-counter">
        {currentIndex + 1}/{images.length}
      </div>
        )}
    </div>
)
}
Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.string,
    ) 
}
export default Carousel