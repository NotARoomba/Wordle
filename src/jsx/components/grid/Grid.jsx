import React from 'react'
import Word from './Word'
import { MAX_GUESSES } from '../../Constants'

export default function Grid({guesses, currentGuess, answer, error, reveal}) {
    const empty = guesses.length < MAX_GUESSES ? Array(MAX_GUESSES - 1 - guesses.length).fill("") : [];
  return (<div className="words-box">
    {guesses.map((g, i) => 
        (<Word key={i} status={"complete"} word={g} answer={answer} reveal={(reveal&&i==guesses.length-1)}/>)
    )}
    {guesses.length != MAX_GUESSES?<Word status={"inprogress"+(error[1]?" jiggle":"")} word={currentGuess} answer={answer}/>:<></>}
    {empty.map((g, i) => 
        (<Word key={i} status={"uncomplete"} word={g} answer={answer}/>))}
  </div>)
}