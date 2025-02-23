import { useContext } from "react";
import { AppContext } from "../reducer/AppContext";

export default function AllClients(){


    const { state, dispatch }  = useContext(AppContext)

    const allProjects = state.allProject;

    const clients = allProjects.map((allProjectToClient)=>(allProjectToClient.clientname))

    return(
        <div> 
          {
            clients.map((client)=>(<h2>{client}</h2>))
          }
        </div>
    )
}