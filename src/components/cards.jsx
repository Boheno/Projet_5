import { Link } from "react-router-dom"
import PropTypes from "prop-types";

function GenerateCards({ logements }) {
    return (
        <div className="logements-container">
            {logements.map((logement) => (
                <div key={logement.id} className="logement-card">
                    <Link to={`/logements/${logement.id}`}>
                    <img src={logement.cover} alt={logement.title} />
                    <figcaption>{logement.title}</figcaption>
                    </Link> 
                  </div>
            ))}
            </div>
    );
}
GenerateCards.propTypes ={
    logements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            cover: PropTypes.string,
            title: PropTypes.string,
        })
    )
}

export default GenerateCards