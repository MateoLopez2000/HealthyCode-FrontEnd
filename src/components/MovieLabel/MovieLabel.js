import React from "react"
//import movie from "./MoviesCollage.jpg"
import './MovieLabel.css';
export default function MovieLabel(props){
    return(
        <a href="/"><img src={props.movie.imagen} alt=""></img></a>
    );
}
