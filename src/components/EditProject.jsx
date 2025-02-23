import "./editproject.css"

import { useContext, useReducer, useState } from "react"
import { initialState } from "../reducer/ApplicationReducer"
import { AppContext } from "../reducer/AppContext"

export default function EditProject({appname, clientname, totalbudget, profitibility, actualHours, hoursWorked}){
   const [projectName, setProjectName] = useState("")
   const [projectBudget, setProjectBudget] = useState(0)
   const [hoursToWork, setHoursToWork] = useState(0)
   const [clientName, setClientName] = useState("")
   const [stateOfTheProject, setStateOfTheProject] = useState("ongoing")

   const { state, dispatch } = useContext(AppContext)

   const changeProjectState = (value) =>{
        setStateOfTheProject(value)
   }

   const addProject = () =>{
    const projectItem = {id: state.allProject.length+1, projectname: projectName, projectbudget: projectBudget, hourstowork: hoursToWork, clientname: clientName, currentstatus: stateOfTheProject}
    dispatch({type: "ADD_NEW_PROJECT", payload: projectItem})
   }


    return(
        <div>
            <h3>Add Project Here!</h3>
            <label>Enter Project Name: </label>
            <input type="text" value={projectName} onChange={(e)=>{setProjectName(e.target.value)}} placeholder="Enter Project Name..." className="inputbox"/>
            <label>Enter Project Budget: </label>
            <input type="text" value={projectBudget} onChange={(e)=>{setProjectBudget(e.target.value)}} placeholder="Enter Budget..." className="inputbox"/>
            <label>Enter Total Hours: </label>
            <input type="text" value={hoursToWork} onChange={(e)=>{setHoursToWork(e.target.value)}} placeholder="Enter Hours to work..." className="inputbox"/>
            <label>Enter Client Name: </label>
            <input type="text" value={clientName} onChange={(e)=>{setClientName(e.target.value)}} placeholder="Enter Client Name..." className="inputbox"/>
            <label>Current Project Status: </label>
            <select value={stateOfTheProject} onChange={(e)=>{changeProjectState(e.target.value)}} className="inputbox">
                <option value={"ongoing"}> Ongoing </option>
                <option value={"completed"}> Completed </option>
                <option value={"delayed"}> Delayed </option>
            </select>

            <button onClick={()=>{addProject()}}>Add Project</button>
        </div>
    )
}