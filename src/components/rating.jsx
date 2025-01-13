import PropTypes from "prop-types";

function RatingLogement ({rating, maxRating = 5}) {
    let stars = []
    for (let i = 1; i <= maxRating; i++){
        if (i <= rating) {
            stars.push(<span key={i}><i className="fa-solid fa-star"></i></span>)
        } else {
            stars.push(<span key={i}><i className="fa-regular fa-star"></i></span>)
        }
    }
    return <div className="rating-stars">{stars}</div>
}
RatingLogement.propTypes = {
    rating: PropTypes.string,
    maxRating: PropTypes.string,
}

export default RatingLogement