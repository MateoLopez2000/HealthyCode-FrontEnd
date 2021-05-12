import React from "react"
import './Header.css';
export default function Header(props){
    return(
        <div class="header">
            <h2> HealthyCode</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Search</a></li>
                <li><a href="/">Profile</a></li>
            </ul>
        </div>
    );
}

