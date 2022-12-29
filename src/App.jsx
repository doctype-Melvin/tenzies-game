import React from "react"
import Die from "./components/Die"


export default function App() {
    return (
        <main className="mainContainer">
            <div className="diceContainer">
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
                <Die value='6' />
            </div>
        </main>
    )    
}