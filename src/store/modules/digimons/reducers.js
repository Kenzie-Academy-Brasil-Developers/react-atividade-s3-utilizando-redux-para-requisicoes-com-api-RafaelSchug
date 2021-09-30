import { ADD_DIGIMONS, LIST_DIGIMONS } from "./actionTypes";

export const digimonsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_DIGIMONS: 
            const {digimon} = action;
            return digimon;
        default:
            return state;
    }
}

export const digimonsListReducer = (state = [], action) => {
    switch (action.type) {
        case LIST_DIGIMONS:
            const {digimons_list} = action;
            return digimons_list;
        default:
            return state;
    }
}
