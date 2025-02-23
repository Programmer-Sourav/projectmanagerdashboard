import TopCards from "./TopCards";
import "./topcard.css"
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

export default function TopBanner(){


    return(
        <div className="topbannermain"> 
            <TopCards noOfProjects= {5} cardDescription={"Total Projects"} iconForTheCard={faListCheck} type={"info"}/> 
            <TopCards noOfProjects= {1} cardDescription={"Completed"} iconForTheCard={faClockRotateLeft} type={"info"}/> 
            <TopCards noOfProjects= {3} cardDescription={"Ongoing"} iconForTheCard={faArrowsRotate} type={"info"}/> 
            <TopCards noOfProjects= {1} cardDescription={"Delayed"} iconForTheCard={faTriangleExclamation} type={"warning"}/> 
            <TopCards noOfProjects= {5} cardDescription={"Employees"} iconForTheCard={faUserGroup} type={"info"}/> 
        </div>
    )
}