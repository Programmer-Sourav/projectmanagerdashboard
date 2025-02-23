import "./project-card-big.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import userImage from "../assets/userimage.jpeg"
import EditProject from "./EditProject";

export default function BigProjectCards({appName, client, totalBudget, profitibility, actualHours, hoursWorked}){

    const editOnBtnClick = () =>{
       <EditProject appname = {appName} clientname= {client} totalbudget={totalBudget}  profitibility={profitibility} actualHours= {actualHours} hoursWorked={hoursWorked}/>
    }

    const deleteOnBtnClick = () =>{

    }

    return(
        <div className="square-card-project1"> 
           <h3>{appName}</h3>
           <p style={{color: "gray"}}>{client}</p>
           <p><span style={{color: "gray"}}>Total Budget: </span><span>${totalBudget}</span></p>
           <p><span style={{color: "gray"}}>Profitablity: </span><span>{profitibility}$</span></p>
           <img src={userImage} alt="profilePic" className="top-icon-sq-card1"/>
           <div className="progressbar1"></div>
           <div>
           <p>Actual Hours: 
           {actualHours}</p>
           <p>{hoursWorked} hours over budget</p>
           <button onClick={editOnBtnClick} className="btndesign">Edit Project</button>
           <button onClick={deleteOnBtnClick} className="btndesign">Delete Project</button>
           </div>
        </div>
    )
}