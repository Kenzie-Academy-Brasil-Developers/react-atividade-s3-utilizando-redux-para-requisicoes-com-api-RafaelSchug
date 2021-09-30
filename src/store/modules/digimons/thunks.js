import { addDigimon, listDigimon } from "./actions";
import api from "../../../services/api";

const addDigimonThunk = (digimon, setError) => (dispatch) => {
    api.get(`/name/${digimon}`)
    .then(response=>{
        const digimonFound = response.data[0];
        dispatch(addDigimon(digimonFound))
        setError(false)       
    })
    .catch(_ => {
        dispatch(addDigimon([]))
        setError(true)
    })
}

export const listDigimonThunk = () => (dispatch) => {
    api.get()
    .then(response=>{
        dispatch(listDigimon(response.data))
    })
}


export default addDigimonThunk;