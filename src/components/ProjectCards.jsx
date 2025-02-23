import "./project-card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import userImage from "../assets/userimage.jpeg"

export default function ProjectCards({appName, client, totalBudget, profitibility, actualHours, hoursWorked}){


    return(
        <div className="square-card-project"> 
           <h3>{appName}</h3>
           <p style={{color: "gray"}}>{client}</p>
           <p><span style={{color: "gray"}}>Total Budget: </span><span>${totalBudget}</span></p>
           <p><span style={{color: "gray"}}>Profitablity: </span><span>{profitibility}$</span></p>
           <img src={userImage} alt="profilePic" className="top-icon-sq-card"/>
           <div className="progressbar"></div>
           <div>
           <p>Actual Hours: 
           {actualHours}</p>
           <p>{hoursWorked} hours over budget</p>
           </div>
        </div>
    )
}