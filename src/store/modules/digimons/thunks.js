import { addDigimon } from "./actions";
import api from "../../../services/api";

const addDigimonThunk = (digimon, setError) = (dispatch) => {
    api.get(`/name/${digimon}`)
    .then(response=>{
        const digimonFound = response.data;
        dispatch(addDigimon(digimonFound))
        console.log(digimonFound);        
    })
    .catch(error => {
        console.log(error)
    })
}

export default addDigimonThunk;