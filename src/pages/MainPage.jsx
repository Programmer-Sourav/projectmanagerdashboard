import "./mainpage.css"
import Employees from "../components/Employees";
import ProjectBanner from "../components/ProjectBanner";
import TopBanner from "../components/TopBanner";
import ProjectNavComponent from "../components/ProjectNavComponent";

export default function MainPage(){


    return(
        <div> 
            <TopBanner/>
            <Employees/>
           <ProjectNavComponent/>
            <ProjectBanner/>
        </div>
    )
}