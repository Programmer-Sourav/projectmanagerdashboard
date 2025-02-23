import "./header.css"
import UserImage from "../assets/userimage.jpeg"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react";

export default function Header(){
     const navigate = useNavigate();
     const [currentLink, setCurrentLink] = useState("")


     useEffect(()=>{
        switch(currentLink){
            case "dashboard": 
            navigate("/")
            case "projects":
            navigate("/projects")
            case "teams":
            navigate("/team")
            case "clients":
            navigate("/clients")
        }
     }, [currentLink])
   
    return(
        <header className="header"> 
        <div className="logocontainer">
            <h2><span className="logoinitial">H</span> <span className="logoletters">O</span> <span className="logoletters">U</span> <span className="logoletters"> R</span> <span className="logoletters">S</span></h2>
        </div>
        <div className="headermenu">
            <span onClick={()=>{setCurrentLink("dashboard")}}>Dashboard</span>
            <span onClick={()=>{setCurrentLink("projects")}}>Projects</span>
            <span onClick={()=>{setCurrentLink("teams")}}>Team</span>
            <span onClick={()=>{setCurrentLink("clients")}}>Clients</span>
            <span>Time</span>
            <span>Report</span>
        </div>
        <div className="loginmenu">
            <img src={UserImage} alt="profilepic" className="top-userprofile-icon-header"/>
            <p className="userprofile">Mario</p>
        </div>
        </header>
    )
}