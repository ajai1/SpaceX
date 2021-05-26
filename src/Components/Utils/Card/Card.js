import React, {useEffect} from 'react'

import "./Card.css"

function Card({apiType, info}) {

    const buildCard = () => {
        const apiKeys = Object.keys(apiType);
        const classes = [];
        let cardInfo = apiKeys.map((key)=>{
            if(key=="active"){
                info[key] ? classes.push("active") : classes.push("non_active")
            }
            else if(key=="name"){
                console.log(info[key])
                return  <h1>{info[key]}</h1>
            }
            else if(key=="image"){
                return <a href={info.url} target="_blank">
                        <img className="card_image" src={info[key]}></img>
                    </a>
            }else{
                return <h3>{info[key]}</h3>
            }
        })
        console.log(info.active)
        return <div className={classes}>{cardInfo}</div>;
    }

    return (
        <div className="card_container">
          {buildCard()}
        </div>
    )
}

export default Card
