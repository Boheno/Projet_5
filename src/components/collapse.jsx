import { useState } from "react";
import PropTypes from "prop-types";

let Collapse = ({title, children}) => {
    let [isOpen, setIsOpen] = useState(false)
    let toggleCollapse = () => {
        setIsOpen((prev) => !prev)
    }

return (
    <div className="collapse">
        <div className="collapse-title">
            <h2>{title}</h2>
            <span onClick={toggleCollapse}><i className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
            </span>
        </div>
        <div className={`collapse-content ${isOpen ? "open" : ""}`} > {children}</div>
    </div>
)
}

Collapse.propTypes ={
    title: PropTypes.string,
    children: PropTypes.node,
}
export default Collapse