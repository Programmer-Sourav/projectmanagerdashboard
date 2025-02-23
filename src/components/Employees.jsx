import { useContext } from "react";
import EmployeeCard from "./EmployeeCard";
import "./employees.css"
import { AppContext } from "../reducer/AppContext";

export default function Employees(){

  const { state, dispatch } = useContext(AppContext)

  const listOfEmployees = state.allEmployees;

    return(
        <div className="employeesList">
            {listOfEmployees.map((item)=>(
                <EmployeeCard key={item.id} employeename={item.employeeName} designation={item.designatio}/>
            ))} 
            
        </div>
    )
}