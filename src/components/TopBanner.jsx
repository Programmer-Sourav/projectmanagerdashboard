import TopCards from "./TopCards";
import "./topcard.css"
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { AppContext } from "../reducer/AppContext";

export default function TopBanner(){

     const { state, dispatch } = useContext(AppContext)

     const allProjects = state.allProject;

     const noOfProjects = state.allProject.length;
     const completedProjectsCount = allProjects.filter((item)=>item.currentstatus.toLowerCase()==="completed").length;
     const ongoingProjectsCount = allProjects.filter((item)=>item.currentstatus.toLowerCase()==="ongoing").length;
     const delayedProjectsCount = allProjects.filter((item)=>item.currentstatus==="delayed").length;
     const employeesCount = state.allEmployees.length;
     
    return(
        <div className="topbannermain"> 
            <TopCards noOfProjects= {noOfProjects} cardDescription={"Total Projects"} iconForTheCard={faListCheck} type={"info"}/> 
            <TopCards noOfProjects= {completedProjectsCount} cardDescription={"Completed"} iconForTheCard={faClockRotateLeft} type={"info"}/> 
            <TopCards noOfProjects= {ongoingProjectsCount} cardDescription={"Ongoing"} iconForTheCard={faArrowsRotate} type={"info"}/> 
            <TopCards noOfProjects= {delayedProjectsCount} cardDescription={"Delayed"} iconForTheCard={faTriangleExclamation} type={"warning"}/> 
            <TopCards noOfProjects= {employeesCount} cardDescription={"Employees"} iconForTheCard={faUserGroup} type={"info"}/> 
        </div>
    )
}