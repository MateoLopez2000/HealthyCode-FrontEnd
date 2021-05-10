import React from "react"
import './SearchBar.css';
export default function SearchBar(props){
    return(
        <div class="form-box">
            <input type="text" class="search-field movies" placeholder="What are we looking for?"/>
            <button class="search-btn" type="button">Search</button>
        </div>
    );
}

