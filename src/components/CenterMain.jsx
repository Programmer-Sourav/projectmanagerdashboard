import "./centermain.css"
import ChartsFragment from "./ChartsFragment";
import Employees from "./Employees";

export default function CenterMain(){

    return(
        <div className="centermaincharts">
       <Employees/>
       <ChartsFragment/>
        </div>
    )
}