import { useEffect, useState } from 'react'

import Grid from "./Grid.jsx"
import Keyboard from './Keyboard.jsx';

import '../css/App.css'

export default function Wordle() {
  const answer = "fires"
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState(Array())
  // const [currentGuess, setGuessCount] = useState(0)
  // let [guesses, setGuess] = useState(Array(maxGuess).fill(""))
  
  const onChar = (value) => {
    console.log(value)
  }
  const onDelete = (value) => {
    console.log("DELETE")
  }
  const onEnter = (value) => {
    console.log("ENTER")
  }
  return (
    <>
      <div className="top-text">
        <p>Wordle</p>
      </div>
      <Grid guesses={guesses} currentGuess={currentGuess}/>
      <Keyboard onChar={onChar} onDelete={onDelete} onEnter={onEnter}/>
    </>
  )
}