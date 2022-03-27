import React from 'react';
import picture from "./IMG_7393.jpg"

export default function Header(){
    return (
        <div className="headerdiv">
            <img src={picture} className="pic"/>
            <h3 className = "name">Tiisetso Mojalefa</h3>
            <p className = "title">Software engineer</p>
            <p className = "school">University of Witswatersrand</p>
        </div>
    )
}