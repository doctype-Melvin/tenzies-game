import React, { useState } from "react"
import Die from "./components/Die"

export default function App() {

    const [dice, setDice] = useState(allNewDice())

    
    function allNewDice(min = 1, max = 6) {
        let newDice = []
        for (let i = 0; i < 10; i += 1) {
            newDice.push({
                value: Math.floor(Math.random() * max ) + min,
                isHeld: false,
                index: i
            })
        }
        return newDice
    }
    
    function rollDice() {
        setDice(allNewDice())
    }

    
    const holdDice = (id) => {
        setDice(prevState => prevState.map(item => {
            return item.index === id ? {...item, isHeld: !item.isHeld} : item
        }))
    }
    
    const diceRender = dice.map((item, index) => <Die
    key={index}
    id={index}
    value={item.value} 
    isHeld={item.isHeld}
    holdDice={() => holdDice(index)}
    />)


    return (
        <main className="mainContainer">
            <div className="diceContainer">
                {diceRender}
            </div>
            <button 
            className="rollBtn"
            onClick={rollDice}
            >
                Roll Dice
            </button>
        </main>
    )    
}