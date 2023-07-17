import { useRef, useState } from 'react'

import Grid from "./Grid.jsx"
import Keyboard from './Keyboard.jsx';
import { WORD_SIZE, WORDS, MAX_GUESSES } from './Constants.jsx';

import '../css/App.css'

export default function Wordle() {
  const [answer, setAnswer] = useState(WORDS[Math.floor(Math.random()*WORDS.length)].toUpperCase())
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState(Array())
  //const [isChecking, setChecking] = useState(false)
  const guessRef = useRef();
  guessRef.current = currentGuess;
  const guessesRef = useRef();
  guessesRef.current = guesses;

  function onChar(value) {
    if (guessRef.current.length+1 <= WORD_SIZE && guessesRef.current.length < MAX_GUESSES) {
      setCurrentGuess(guessRef.current+value)
    }
  }
  const onDelete = () => {
      setCurrentGuess(Array.from(guessRef.current).slice(0, -1).join(""))
  }
  const onEnter = () => {
    if (guessRef.current.length !== WORD_SIZE) {
      //show error
      console.log("WORD TOO SMALL")
      return
    }
    if (!WORDS.includes(guessRef.current.toLowerCase())) {
      //error not found
      console.log("WORD NOT FOUND")
      return
    }
    if (guessRef.current.length == WORD_SIZE && guessesRef.current.length < MAX_GUESSES) {
      console.log("ADDING GUESS")
      setGuesses([...guessesRef.current, guessRef.current])
      setCurrentGuess("")
      
      if (guessRef.current == answer) {
        console.log("GAME WON")
        return
      }
      if (guessesRef.current.length == MAX_GUESSES) {
        console.log("GAME LOST")

      }
      // for (let i = 0; i < WORD_SIZE; i++) {
      //   //check if has word and is in exact pos
      //   //then change color of word
      //   if (answer.includes(guessRef[i]) && answer[i] == guessRef[i]) {

      //   }
      // }
    }
  }
  return (
    <>
      <div className="top-text">
        <p>Wordle</p>
      </div>
       <Grid guesses={guesses} currentGuess={currentGuess} answer={answer}/>
      <Keyboard onChar={onChar} onDelete={onDelete} onEnter={onEnter} answer={answer}/>
    </>
  )
}