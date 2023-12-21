import React from "react";
import {Link} from "react-router-dom";

function PlayButton(){
    return(
        <Link to ="/Menu">
        <button onClick={()=> 
        console.log("clicked")}>
        PLAY</button>
        </Link>
    )
}

export default PlayButton