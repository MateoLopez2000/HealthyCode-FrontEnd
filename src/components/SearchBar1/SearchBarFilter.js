import React from "react"
import './SearchBarFilter.css';
export default function SearchBarFilter(props){
    return(
        <div class="form-box-filter">
            <input type="text" class="search-field-filter movies-filter" placeholder="What are we looking for?"/>
            <input type="date" class="search-field-filter startDate-filter" />
            <input type="date" class="search-field-filter endDate-filter" />
            <input type="text" class="search-field-filter country-filter" placeholder="Country" />
            <button class="search-btn-filter" type="button">Search</button>
        </div>
    );
}

