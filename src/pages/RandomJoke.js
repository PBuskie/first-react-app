import React, {useState, useEffect} from "react";

const RandomJoke = () => {
    const [joke, setJoke] = useState("");

    useEffect(()=>{
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then((response) => response.json())
        .then((data)=>{
            setJoke(`${data.setup} - ${data.punchline}`);
        })
        .catch((error)=> console.error("Error fetching joke:", error));
    }, []);

    return(
        <div style={{textAlign: "center", marginTop:"20px"}}>
            <h1>Random Joke Generator</h1>
            {joke ? <p>{joke}</p> : <p>Loading a joke for you...</p>}
        </div>
    );
}

export default RandomJoke