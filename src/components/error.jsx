import { Link } from "react-router-dom"

function Error(){
    return(
        <div className="error-body">
            <h2 className="error">404</h2>
            <p className="error-text">Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    )
}
export default Error