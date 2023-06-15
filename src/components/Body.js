import React, {useState} from "react"
import HogTile from "./HogTile";

function Body({ hogs }){
    const[greasedPigs, setGreasedPigs] = useState(false)
    const[sortCriteria, setSortCriteria] = useState("all")
    //filter handler
    function handleClick(){
        setGreasedPigs(!greasedPigs)
    }
    //sort handler
    function handleChange(event){
        setSortCriteria(sortCriteria = event.target.value)
        if (sortCriteria === "weight")
            hogs = sortByWeight(hogs)
        else if (sortCriteria === "name")
            hogs = sortByName(hogs)           
    }
    //sort functions
    function sortByWeight(hogs){
        return hogs.sort((a,b) => {return a.weight - b.weight})
    }
    function sortByName(hogs){
        return hogs.sort((a,b) => {
            let fa = a.name.toLowerCase()
            let fb = b.name.toLowerCase()
            if (fa < fb)
                return -1
            if (fa > fb)
                return +1
            return 0
        })
    }
    //filter operations
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
        <React.Fragment>
            {/* factor out search-bar into its own component if there's time */}
        <div class="search-bar"> 
            <button onClick={handleClick}>{greasedPigs ? "Show All Pigs" : "Show Greased Pigs"}</button>
            <select onChange={(event) => handleChange(event)}>
                <option value="all">Sort by...</option>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
        <body>
            <div className="ui grid container">
                {hogTiles}
            </div>
        </body>
        </React.Fragment>
    );
}

export default Body;