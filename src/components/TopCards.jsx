import "./topcards.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function TopCards({noOfProjects, cardDescription, iconForTheCard, type}){


    return(
        <div className="square-card-top" style={ type!=="warning" ? { backgroundColor: "#ffffff" } :{ backgroundColor: "#FF82AC" } }> 
           <FontAwesomeIcon icon={iconForTheCard} style={ type!=="warning" ? { color: "#30d5c8" } :{ color: "#F42C38" } } className="top-icon" />
           <p> <span className="projects-no">{noOfProjects}</span>
           <span>{cardDescription}</span></p>
        </div>
    )
}