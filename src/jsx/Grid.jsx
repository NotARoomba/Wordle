import React from 'react'
import Word from './Word'
import { MAX_GUESSES } from './Constants'

export default function Grid({guesses, currentGuess}) {
    const empty = guesses.length < MAX_GUESSES ? Array.from(Array(MAX_GUESSES - guesses.length)) : [];
  return (<>
    {guesses.map((g) => {
        <Word status={"complete"} word={g}/>
    })}
    <Word status={"inprogress"} word={currentGuess}/>
    {empty.map((g) => {
        <Word status={"uncomplete"} word={""}/>
    })}
  </>)
}