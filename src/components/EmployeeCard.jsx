
import "./employeecard.css"
import userImage from "../assets/userimage.jpeg"

export default function EmployeeCard({employeename, designation}){


    return(
        <div className="employeecard"> 

      
         <img src={userImage} alt="employee" className="employeeImage"/>    
          <h4>{employeename}</h4>
          <p>{designation}</p>

        </div>
    )
}