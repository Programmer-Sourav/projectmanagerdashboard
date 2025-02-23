import { useContext } from "react"
import { AppContext } from "../reducer/AppContext"
import ProjectCards from "../components/ProjectCards";
import "./allprojects.css"
import BigProjectCards from "../components/BigProjectCards";

export default function AllProjects(){

   const { state, disptach} = useContext(AppContext)

   const allProjects = state.allProject;

    return(
        <div className="allproject"> 
         {
            allProjects.map((projectItem)=>(
                <BigProjectCards key={projectItem.id} appName ={projectItem.projectname} client={projectItem.clientname} totalBudget={projectItem.projectbudget} profitibility={"0"} actualHours={projectItem.hourstowork} hoursWorked={"0"}/>
            ))
         }
        </div>
    )
}