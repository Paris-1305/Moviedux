import React from "react";
import '../styles.css';

export default function header(){
     return(
       <div className="header">
        <img className="logo" src='logo.png' alt='moviedux'/>
        <h2 className="app-subtitle">it's time for popcorn! find your next movie here.</h2>
       </div>
     )
}