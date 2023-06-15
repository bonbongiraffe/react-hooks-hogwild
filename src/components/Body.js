import React, {useState} from "react"
import HogTile from "./HogTile";

function Body({ hogs }){

    const[greasedPigs, setGreasedPigs] = useState(false)
    function handleClick(){
        setGreasedPigs(!greasedPigs)
    }
    const filteredHogs = greasedPigs ? hogs.filter((hog) => hog.greased === true ) : hogs
    const hogTiles = filteredHogs.map((hog) => <HogTile
        name={hog.name}
        image={hog.image}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        //using pig name for key
        key={hog.name}/>)
    
    return (
       <body>
            <button onClick={handleClick}>{greasedPigs ? "Show All Pigs" : "Show Greased Pigs"}</button>
            <div className="ui grid container">
                {hogTiles}
            </div>
       </body>
    );
}

export default Body;