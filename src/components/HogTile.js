import React from "react"

function HogTile({ name, image, specialty, weight, greased }){
    return (
        <div className="ui eight wide column">
            <div className="pigTile">
                <img src={image}></img>
                <h1>{name}</h1>
            </div>
        </div>
    );
}

export default HogTile;