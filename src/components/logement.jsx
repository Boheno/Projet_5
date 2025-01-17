import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Collapse from "./collapse.jsx";
import Carousel from "./carousel.jsx";
import RatingLogement from "./rating.jsx";
import Error from "./error";

function CardLogement({ logements }) {
    const {id} = useParams();
    const logement = logements.find((logement) => logement.id === id);
    if (!logement){
        return <Error />
    }
return (
    <div className="card-logement">
        <div key={logement.id} className="logements">
            <div className="img-logement">
                <Carousel images={logement.pictures} />
            </div>
            <div className="logement-content">
            <div className="title-location-tags-content">
            <div className="title-logement">
                <p>{logement.title}</p>
            </div>
            <div className="location-logement">
                <p>{logement.location}</p>
            </div>
            <div className="tags-logement">
                <ul>
                    {logement.tags.map((tag, index)=> (
                        <li key={index}>{tag}</li>
                    ))} 
                </ul>
            </div>
            </div>
            <div className="host-rating-container">
            <div className="host-logement">
            <p className="host-name">{logement.host.name}</p>
            <img className="host-img" src={logement.host.picture} />
            </div>
            <div className="rating-logement">
                <RatingLogement rating={logement.rating} />
            </div>
            </div>
            </div>
            <div className="collapse-logement">
            <div className="description-logement">
                <Collapse title= "Description">
                <p>{logement.description}</p>
                </Collapse>
            </div>
            <div className="equipment-logement">
                <Collapse title="Équipements">
                <ul>
                    {logement.equipments.map((equipment, index)=>(
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
                </Collapse>
            </div>
            </div>

        </div>
    </div>
)
}
CardLogement.propTypes = {
    logementId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    logements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            images:PropTypes.string,
            title:PropTypes.string,
            location:PropTypes.string,
            name:PropTypes.string,
            picture:PropTypes.string,
            tag:PropTypes.arrayOf(PropTypes.string),
            rating:PropTypes.string,
            description:PropTypes.string,
            equipment:PropTypes.arrayOf(PropTypes.string),
        })
    )
}
export default CardLogement;

