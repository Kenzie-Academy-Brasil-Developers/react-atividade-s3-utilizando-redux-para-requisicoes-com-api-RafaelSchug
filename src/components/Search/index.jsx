import { useDispatch } from "react-redux";
import addDigimonThunk from "../../store/modules/digimons/thunks";
import { useState } from "react";
import './style.css';

const Search = () => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(addDigimonThunk(input, setError));
    }

    return (
        <div className='search__container'>
            <form onSubmit={handleSearch}>
                <input type="text" onChange={event => setInput(event.target.value)} value={input} placeholder='Procurar Digimon' />
                <button type='submit'>Procurar</button>
            </form>
            {error && <p>Nenhum Digimon encontrado</p>}
        </div>
    )
}

export default Search;