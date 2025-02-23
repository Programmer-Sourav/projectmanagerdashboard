import ProjectCards from "./ProjectCards";
import "./projectbanner.css"

export default function ProjectBanner(){





    return(
        <div className="projectbanner"> 
            <ProjectCards appName ={"Insurance App"} client={"Verti"} totalBudget={"$75000"} profitibility={"-2500"} actualHours={"1100"} hoursWorked={"1200"}/>
            <ProjectCards appName ={"Neo"} client={"Verti"} totalBudget={"$75000"} profitibility={"4000"} actualHours={"1100"} hoursWorked={"2000"}/>
            <ProjectCards appName ={"VR Website"} client={"Verti"} totalBudget={"$75000"} profitibility={"4000"} actualHours={"1100"} hoursWorked={"1000"}/>
            <ProjectCards appName ={"VR Website"} client={"Verti"} totalBudget={"$75000"} profitibility={"4000"} actualHours={"1100"} hoursWorked={"1100"}/>
        </div>
    )
}