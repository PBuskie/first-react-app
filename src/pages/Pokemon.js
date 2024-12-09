import React, {useState} from "react";
const pokemons = ["Pikachu", "Charmander", "Squirtle", "Bulbasaur", "Jigglypuff", "Mewtwo", "Charizard", "Blastoise"]

function PokemonCatcher(){
    const [caughtPokemon, setCaughtPokemon] = useState([]);
    const [lastCaught, setLastCaught] = useState("");
    const catchPokemon = () => {
        const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
        setCaughtPokemon([...caughtPokemon, randomPokemon]);
        setLastCaught(randomPokemon);
    };

    return (
        <div style={{textAlign: "center", marginTop:"20px"}}>
            <h1>Pokemon Catcher</h1>
            <button onClick={catchPokemon} style={{backgroundColor: "yellow", border:"none", padding:"10px 20px", borderRadius:"5px", cursor:"pointer", fontSize:"18px", }}>Catch a Pokemon!</button>
            <h2>{lastCaught ? `You caught a ${lastCaught}!` : "Catch your first Pokemon!"}</h2>
            <h3>Total Pokemon caught: {caughtPokemon.length}</h3>
            <ul>{caughtPokemon.map((pokemon, index)=>( <li key={index}>{pokemon}</li>))}</ul>
        </div>
    );
}

export default PokemonCatcher;