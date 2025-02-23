import { useReducer, useState } from "react"
import { initialState } from "../reducer/ApplicationReducer"

export default function AddProjectPage(){
   const [projectName, setProjectName] = useState("")
   const [projectBudget, setProjectBudget] = useState(0)
   const [hoursToWork, setHoursToWork] = useState(0)
   const [clientName, setClientName] = useState("")


    return(
        <div>
            <h1>Add Project Here!</h1>

            <input type="text" value={projectName} onChange={(e)=>{setProjectName(e.target.value)}} placeholder="Enter Project Name..."/>
            <input type="text" value={projectBudget} onChange={(e)=>{setProjectBudget(e.target.value)}} placeholder="Enter Budget..."/>
            <input type="text" value={hoursToWork} onChange={(e)=>{setHoursToWork(e.target.value)}} placeholder="Enter Hours to work..."/>
            <input type="text" value={clientName} onChange={(e)=>{setClientName(e.target.value)}} placeholder="Enter Client Name..."/>

            <select value={stateOfTheProject} onChange={(e)=>{changeProjectState(e.target.value)}}>
                <option value={"ongoing"}> Ongoing </option>
                <option value={"comleted"}> Completed </option>
                <option value={"delayed"}> Delayed </option>
            </select>
        </div>
    )
}