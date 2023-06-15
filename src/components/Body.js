import React from "react"
import HogTile from "./HogTile";

function Body({ hogs }){
    const hogTiles = hogs.map((hog) => <HogTile
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        //using pig name for key
        key={hog.name}/>)
    
    return (
        <div className="ui grid container">
            {hogTiles}
        </div>
    );
}

export default Body;