import { useSelector } from "react-redux";

const Digimon = () => {

    const {digimons: {name, img, level}} = useSelector(state => state) || [];

    return (
        <ul>
          {name && (
              <li>
                  <h3>{name}</h3>
                  <img src={img} alt={name} />
                  <span>{level}</span>
              </li>
          )}  
        </ul>
    )
}

export default Digimon;