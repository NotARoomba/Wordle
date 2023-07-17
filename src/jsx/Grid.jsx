import React from 'react'
import Word from './Word'
import { MAX_GUESSES } from './Constants'

export default function Grid({guesses, currentGuess}) {
    const empty = guesses.length < MAX_GUESSES ? Array(MAX_GUESSES - guesses.length).fill("") : [];
  return (<>
    {guesses.map((g) => {
        <Word status={"complete"} word={g}/>
    })}
    <Word status={"inprogress"} word={currentGuess}/>
    {empty.map((g, i) => 
        (<Word key={i} status={"uncomplete"} word={g}/>))}
  </>)
}