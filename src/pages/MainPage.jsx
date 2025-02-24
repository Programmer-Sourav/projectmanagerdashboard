import "./mainpage.css"
import Employees from "../components/Employees";
import ProjectBanner from "../components/ProjectBanner";
import TopBanner from "../components/TopBanner";
import ProjectNavComponent from "../components/ProjectNavComponent";
import { useContext } from "react";
import { AppContext } from "../reducer/AppContext";
import Header from "../components/Header";
import CenterMain from "../components/CenterMain";

export default function MainPage(){
  
    const { state, dispatch} = useContext(AppContext)

    console.log(555, state.allProject)

    return(
        <div className="mainpage"> 
            <Header/>
            <TopBanner/>
            <CenterMain/>
           <ProjectNavComponent/>
            <ProjectBanner/>
        </div>
    )
}