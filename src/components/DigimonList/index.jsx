import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDigimonThunk } from "../../store/modules/digimons/thunks";
import './style.css';

const DigimonList = () => {

    const dispatch = useDispatch();
    const {digimons_list} = useSelector(state => state)

    useEffect(()=> {
        if(digimons_list.length === 0){
            dispatch(listDigimonThunk());
        }
    })

    return (
        <div className='digimons_list'>
            <h3>Lista de Digimons:</h3>
            <ul>
                {digimons_list.map((item, index)=> {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DigimonList;