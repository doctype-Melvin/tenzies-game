import React from "react"


export default function Die({ value, isHeld, holdDice }) {
    return (
        <div 
        className={ isHeld ? "held" : "dieContainer"}
        onClick={holdDice}>
            <h2>
            {value}    
            </h2>
        </div>
    )
}
