import { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";

import Grid from "./components/grid/Grid.jsx"
import Keyboard from './components/keyboard/Keyboard.jsx'
import Error from './Error.jsx';
import { WORD_SIZE, WORDS, MAX_GUESSES } from './Constants.jsx';
import Statistics from './components/modals/Statistics.jsx';
import Letters from './Letters.jsx';

import Modal from 'react-modal';

import '../css/App.css'
import Statistics from './components/modals/Statistics.jsx';

class GameData {
  stats = {
    guessDistribution: [],
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    totalGames: 0,
    successRate: 0
  }
  constructor(stats) {
    if (stats == null) return null
    this.stats = stats;
    return this
  }
}


Modal.setAppElement('#root');
export default function Wordle() {
  const [answer, setAnswer] = useState(WORDS[Math.floor(Math.random()*WORDS.length)].toUpperCase())
  const [currentGuess, setCurrentGuess] = useState("")
  const [guesses, setGuesses] = useState(Array())
  const [error, setError] = useState(["", false])
  const [reveal, setReveal] = useState(false)
  const [modalOpen, setModal] = useState(false)
  const [gameState, setGameState] = useState([false, false])
  const [statistics, setStatistics] = useState(new GameData);
  //const [isChecking, setChecking] = useState(false)
  const guessRef = useRef();
  guessRef.current = currentGuess;
  const guessesRef = useRef();
  guessesRef.current = guesses;
  const errorRef = useRef()
  errorRef.current = error
  const gameStateRef = useRef()
  gameStateRef.current = gameState;
  const statisticsRef = useRef()
  statisticsRef.current = statistics
  useEffect(() => {
    let stats = localStorage.getItem("statistics")
    setStatistics(stats != null?new GameData({...JSON.parse(stats)}) : new GameData())
  }, [])
  useEffect(() => {
    statistics
  }, [statistics])
  function onChar(value) {
    if (gameStateRef.current[0]||gameStateRef.current[1]) return;
    if (guessRef.current.length+1 <= WORD_SIZE && guessesRef.current.length < MAX_GUESSES) {
      setCurrentGuess(guessRef.current+value)
    }
  }
  function onDelete() {
      setCurrentGuess(Array.from(guessRef.current).slice(0, -1).join(""))
  }
  function onEnter() {
    if (gameStateRef.current[0]||gameStateRef.current[1]) return;
    if (guessRef.current.length !== WORD_SIZE) {
      //show error
      if (!errorRef.current[1]) { 
      setError(["Word too small", true])
      setTimeout(() => {
        setError(["Word too small", false])
      }, 2000);
    }
      return
    }
    if (!WORDS.includes(guessRef.current.toLowerCase())) {
      //error not found
     if (!errorRef.current[1]) { 
      setError(["Word not found", true])
      setTimeout(() => {
        setError(["Word not found", false])
      }, 2000);
    }
      return
    }
    if (guessRef.current.length == WORD_SIZE && guessesRef.current.length < MAX_GUESSES) {
      setGuesses([...guessesRef.current, guessRef.current])
      setReveal(true)
      setTimeout(() => {
        setError(false)
      }, 5000);
      setCurrentGuess("")
      
      if (guessRef.current == answer) {
        // setReveal(true)
        setGameState([true, false])
        updateStatistics(true)
        setTimeout(() => {
          openModal()
          $(".top-text")[0].style.margin = 0;
          $("#play-again-button")[0].style.display = "flex"
        }, 4000);
        return
      }
      if (guessesRef.current.length == MAX_GUESSES-1) {
        // setReveal(true)
        setGameState([false, true])
        updateStatistics(false)
        setTimeout(() => {
          openModal()
          $(".top-text")[0].style.margin = 0;
          $("#play-again-button")[0].style.display = "flex"
        }, 4000);
        return
      }
    }
  }
  function closeModal() {
    setModal(false)
  }
  function openModal() {
    setModal(true)
  }
  function updateStatistics(won) {
    let stats = {};
    if (statistics.stats.gamesWon == null) {
      stats = {
        guessDistribution: [guessesRef.current.length+1],
        gamesWon: won?1:0,
        currentStreak: won?1:0,
        maxStreak: won?1:0,
        totalGames: 1,
        successRate: won?100:0
      }
    } else {
      let currentStreak = won?statisticsRef.current.stats.currentStreak+1:0;
      let gamesWon = statisticsRef.current.stats.gamesWon+(won?1:0);
      let totalGames = statisticsRef.current.stats.totalGames+1;
       stats =  {
        guessDistribution: [...statisticsRef.current.stats.guessDistribution, guessesRef.current.length+1],
        gamesWon,
        currentStreak,
        maxStreak: Math.max(currentStreak, statisticsRef.current.stats.currentStreak),
        totalGames,
        successRate: Math.round((gamesWon/totalGames)*100)
      }
    }
    setStatistics(new GameData({...stats}))
    localStorage.setItem("statistics", JSON.stringify(stats))
  }
  return (
    <div className="wordle">
      <div className="top-text">
        <p>Wordle</p>
        <button tabIndex="-1" onClick={(e) => { e.currentTarget.blur();openModal()}}><img id="bar-chart-img" src="/assets/bar-chart.svg"/></button>
      </div>
      <Statistics statistics={statistics} won={gameState[0]} answer={answer} modalOpen={modalOpen} closeModal={closeModal}/>
      <div id="play-again-button" style={{display: "none"}} onClick={() => window.location.reload()}>Play Again</div>
        <Error desc={error}/>
       <Grid guesses={guesses} currentGuess={currentGuess} answer={answer} error={error} reveal={reveal}/>
      <Keyboard onChar={onChar} onDelete={onDelete} onEnter={onEnter} answer={answer} guesses={guesses} reveal={reveal}/>
      <Letters/>
    </div>
  )
}