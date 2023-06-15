import React, {useState} from "react"

function HogTile({ name, image, specialty, weight, greased }){

    const [showDetail, setDetail] = useState(false)

    function handleClick(){
        setDetail(!showDetail)
    }
    
    function Detail(){
        if(showDetail){
            return (
                <React.Fragment>
                    <p>Specialty: {specialty}</p>
                    <p>Weight: {weight}lbs</p>
                    <p>{greased ? 'I am greased' : 'I am not greased'}</p>
                </React.Fragment>
            )
        }
        else{
            return (
                null
            )
        }
    }

    return (
        <div className="ui eight wide column">
            <div className="pigTile">
                <img src={image} onClick={handleClick}></img>
                <h1>{name}</h1>
                <Detail />
            </div>
        </div>
    );
}

export default HogTile;