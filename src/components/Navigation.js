import react from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/count">Count</Link>
                </li>
                <li>
                    <Link to="/joke">Joke</Link>
                </li>
                <li>
                    <Link to="/pokemon">Pokemon</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Navigation