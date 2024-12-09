import react from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home.js";
import Count from "./pages/Count";
import RandomJoke from "./pages/RandomJoke.js";
import PokemonCatcher from "./pages/Pokemon.js";


const App = () => {
  return (
   <>
    <Router>
      <header>
        <Navigation />
      </header>
      <main>
      {/* Will change depending on content behind loaded */}
      <Routes>
        <Route path="/Home" element={ <Home />}/>
        <Route path="/Count" element={ <Count />}/>
        <Route path="/joke" element={ <RandomJoke />}/>
        <Route path="/Pokemon" element={ <PokemonCatcher />}/>

      </Routes>
      </main>
      <footer>

      </footer>
    </Router>
   </> 
  );
}

export default App;
