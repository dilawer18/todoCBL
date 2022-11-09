
import store from "./store";

import types from "./types";

let init_state = {data:[{title:'',desc:''}] }
export function counterReducer(state = init_state, action) {
    switch (action.type) {
        case types.ADD_TODO: {
            
            return { ...state,}
        }
        
        default:
            return { ...state }
    }
}