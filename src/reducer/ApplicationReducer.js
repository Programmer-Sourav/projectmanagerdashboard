
export const initialState = {
    allProject: [],
    projectStatus: "", 
    totalProjects: 0,
}





export function appReducer(state, action){
      switch(action.payload){
        case "ADD_NEW_PROJECT": 
        return {...state, allProject: [...state.allProject, action.payload]}
        break;
      }

}

export default appReducer;