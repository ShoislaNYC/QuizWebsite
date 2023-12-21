import React from "react";
import {Link} from "react-router-dom"

function Button(props) {
    return(
        <Link to ={props.link}>
        <button className="nav" onClick={()=> 
        console.log("clicked")}>
        {props.name}</button>
        </Link>
    )
}

function NavBar(){
    
    return(
    <nav>
        <Button name="Home" link = "/"/>
    </nav>
    )
}

export default NavBar