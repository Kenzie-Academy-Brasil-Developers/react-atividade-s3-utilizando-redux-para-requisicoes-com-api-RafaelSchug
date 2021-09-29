import { useDispatch } from "react-redux";
import addDigimonThunk from "../../store/modules/digimons/thunks";
import { useState } from "react";

const Search = () => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(addDigimonThunk(input, setError));
    }

    return (
        <div>
            <input type="text" onChange={event => setInput(event.target.value)} value={input} />
            <button onClick={handleSearch} >Procurar</button>
            {error && <p>Não foi possível encontrar o Digimon</p>}
        </div>
    )
}

export default Search;