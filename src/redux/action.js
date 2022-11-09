import types from "./types";

export function increment(data, data2) {
    return {
        type: types.ADD_TODO,
        payload: { quantity: data,}
    }
}

