
import store from "./store";

import types from "./types";

let init_state = {todoData:[]}
export function counterReducer(state = init_state, action) {
    // console.log("data in reducer",action.payload)
    switch (action.type) {
        case types.ADD_TODO: {
            let data = action.payload
            // console.log("action data", data)
            arr=[...state.todoData,data]


            
            return { ...state,todoData:arr}
        }
        
        default:
            return { ...state }
    }
}