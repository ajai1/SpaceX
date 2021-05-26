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
                console.log(info[apiType[key]])
                return  <h1>{info[apiType[key]]}</h1>
            }
            else if(key=="image"){
                return <a href={info.url} target="_blank">
                        <img className="card_image" src={info[apiType[key]]}></img>
                    </a>
            }
            else if(key=="wikipedia"){
                return <iframe src={info[apiType[key]]} width="600" height="200"/>
                       
            }else{
                return <h3>{info[apiType[key]]}</h3>
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
