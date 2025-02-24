import "./charts-fragment.css";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default function ChartsFragment() {
    return(
        <div className="charts"> 
              <LineChart className="item1"/>
              <PieChart className="item2"/>
        </div>
    )
}
