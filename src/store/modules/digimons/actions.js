import { ADD_DIGIMONS, LIST_DIGIMONS } from "./actionTypes"

export const addDigimon = (digimon) => {
    return {
        type: ADD_DIGIMONS,
        digimon,
    }
}

export const listDigimon = (digimons_list) => {
    return {
        type: LIST_DIGIMONS,
        digimons_list
    }
}