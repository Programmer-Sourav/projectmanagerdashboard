import { useNavigate } from "react-router"
import "./projectnav.css"

export default function ProjectNavComponent(){

   const navigation = useNavigate();

    const openAddProjectPage = () =>{
       navigation("/addproject")
    }
    return(
        <div className="projectnavbody"> 
        <button className="addprojectbutton" onClick={openAddProjectPage}>Add New Project </button>
        <button className="outlinebtn">Download Report</button>
        <button className="outlinebtn">dd-mm-yyyy - dd-mm-yyyy</button>
        <button className="outlinebtn">Filter</button>
        </div>
    )
}