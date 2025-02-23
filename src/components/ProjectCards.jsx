import "./project-card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import userImage from "../assets/userimage.jpeg"

export default function ProjectCards({appName, client, totalBudget, profitibility, actualHours, hoursWorked}){


    return(
        <div className="square-card-project"> 
           <h3>Insurance App</h3>
           <p style={{color: "gray"}}>Verti</p>
           <p><span style={{color: "gray"}}>Total Budget: </span><span>$75000</span></p>
           <p><span style={{color: "gray"}}>Profitablity: </span><span>-2500$</span></p>
           <img src={userImage} alt="profilePic" className="top-icon-sq-card"/>
           <div className="progressbar"></div>
           <div>
           <p>Actual Hours: 
           {1000}</p>
           <p>100 hours over budget</p>
           </div>
        </div>
    )
}