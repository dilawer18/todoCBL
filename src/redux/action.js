import types from "./types";

export function todo(data) {
    return {
        type: types.ADD_TODO,
        payload: data
    }
}

