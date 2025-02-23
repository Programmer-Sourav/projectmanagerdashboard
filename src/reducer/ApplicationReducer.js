
export const initialState = {
    allProject: [],
    projectStatus: "", 
    totalProjects: 0,
    allEmployees: [{id: 1, employeeName:"Andrea", designatio:  "Junior UX"},
      {id: 2, employeeName:"Alvaro", designatio:  "Backend Developer"},
      {id: 3, employeeName:"Juan", designatio:  "UX Senior"},
      {id: 4, employeeName:"Jose", designatio:  "Marketting"},
      {id: 5, employeeName:"Maria", designatio:  "Junior UX"}
    ]
}





export function appReducer(state, action){
    
      switch(action.type){ 
        case "ADD_NEW_PROJECT": 
        return {...state, allProject: [...state.allProject, action.payload]}
      }

}

export default appReducer;