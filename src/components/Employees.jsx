import EmployeeCard from "./EmployeeCard";
import "./employees.css"

export default function Employees(){
  const listOfEmployees = [{id: 1, employeeName:"Andrea", designatio:  "Junior UX"},
    {id: 2, employeeName:"Alvaro", designatio:  "Backend Developer"},
    {id: 3, employeeName:"Juan", designatio:  "UX Senior"},
    {id: 4, employeeName:"Jose", designatio:  "Marketting"},
    {id: 5, employeeName:"Maria", designatio:  "Junior UX"}
  ]

    return(
        <div className="employeesList">
            {listOfEmployees.map((item)=>(
                <EmployeeCard key={item.id} employeename={item.employeeName} designation={item.designatio}/>
            ))} 
            
        </div>
    )
}