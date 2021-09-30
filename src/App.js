import './App.css';
import Digimon from './components/Digimon';
import DigimonList from './components/DigimonList';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search></Search>
      <Digimon></Digimon>
      <DigimonList></DigimonList>
    </div>
  );
}

export default App;
