import { useContext } from "react";
import ProjectCards from "./ProjectCards";
import "./projectbanner.css"
import { AppContext } from "../reducer/AppContext";

export default function ProjectBanner(){

const { state, dispatch } = useContext(AppContext)

const allProjects = state.allProject;

    return(
        <div className="projectbanner"> 
          {allProjects.map((projectItem)=>(
            <ProjectCards key={projectItem.id} appName ={projectItem.projectname} client={projectItem.clientname} totalBudget={projectItem.projectbudget} profitibility={"0"} actualHours={projectItem.hourstowork} hoursWorked={"0"}/>
          ))}
           
        </div>
    )
}