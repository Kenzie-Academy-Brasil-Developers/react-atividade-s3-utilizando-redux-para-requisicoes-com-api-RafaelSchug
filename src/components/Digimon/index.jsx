import { useSelector } from "react-redux";
import './style.css';

const Digimon = () => {

    const {digimons: {name, img, level}} = useSelector(state => state) || [];

    return (
        <>
          {name && (
            <div className='digimon__card'>
                  <h3>{name}</h3>
                  <img src={img} alt={name} />
                  <span>{level}</span>
            </div>
          )}  
        </>
    )
}

export default Digimon;