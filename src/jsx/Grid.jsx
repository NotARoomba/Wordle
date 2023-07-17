import React from 'react'
import Word from './Word'
import { MAX_GUESSES } from './Constants'

export default function Grid({guesses, currentGuess, answer}) {
    const empty = guesses.length < MAX_GUESSES ? Array(MAX_GUESSES - 1 - guesses.length).fill("") : [];
    console.log(empty)
  return (<>
    {guesses.map((g, i) => 
        (<Word key={i} status={"complete"} word={g} answer={answer}/>)
    )}
    {guesses.length != MAX_GUESSES?<Word status={"inprogress"} word={currentGuess}/>:<></>}
    {empty.map((g, i) => 
        (<Word key={i} status={"uncomplete"} word={g}/>))}
  </>)
}