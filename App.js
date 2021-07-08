import './App.css';
import {useState} from 'react'; 
import axios from 'axios';

function App() {
  const [pokemonName, setpokemonName] = useState("");

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => {
      console.log(response);
      }
    );
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Poke States !</h1>
        <input type="text" onChange={(event) => {
          setpokemonName(event.target.value);
        }} />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
    </div>
  );
}

export default App;
