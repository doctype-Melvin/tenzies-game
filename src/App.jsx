import React, { useEffect, useState } from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"


export default function App() {

    const randomizer = (min = 1, max = 6) => Math.floor(Math.random() * max ) + min
    
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [counter, setCounter] = useState(0)

    const reset = () => {
        setDice(allNewDice())
        setTenzies(false)
        setCounter(0)
    }

    useEffect(() => {
        const allHeld = dice.every(item => item.isHeld)
        const refValue = dice[0].value
        const allSameValue = dice.every(item =>item.value === refValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
            console.log('Tenzies!')
        }

    }, [dice])
    
    function allNewDice() {
        let newDice = []
        for (let i = 0; i < 10; i += 1) {
            newDice.push({
                value: randomizer(),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }
    
    function rollDice() {
        setCounter(prevCount => prevCount + 1)
        setDice(prevState => prevState.map(item => {
            return item.isHeld ? item : {...item, value: randomizer()}
        }))
    }
    
    const holdDice = (id) => {
        setDice(prevState => prevState.map(item => {
            return item.id === id ? {...item, isHeld: !item.isHeld} : item
        }))
    }
    
    const diceRender = dice.map((item) => <Die
    key={item.id}
    value={item.value} 
    isHeld={item.isHeld}
    holdDice={() => holdDice(item.id)}
    />)


    return (
        <main className="mainContainer">
           {tenzies && <Confetti numberOfPieces={600} wind={0.02} initialVelocityX={10} />}
            <h1 className="title">Tenzies</h1>
            <span className="para">Roll the dice and hold all that are the same value</span>
            {tenzies ? <span className="info">You only needed {counter} clicks to win!</span> : <div className="info"></div>}
            <div className="diceContainer">
                {diceRender}
            </div>
            <button 
            className="rollBtn"
            onClick={tenzies ? reset : rollDice}
            >
                {tenzies ? "Play Again" : "Roll Dice"}
            </button>
        </main>
    )    
}