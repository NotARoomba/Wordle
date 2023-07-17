import React, { useState } from 'react';
import Tile from './Tile.jsx'
import { getGuessTypes } from './Constants.jsx';

export default function Word({status, word, answer}) {
  if(status == "complete") {
    const guessTypes = getGuessTypes(answer, word)
    return (
      <div className={("word-" + status)}>
        {[...word].map((g, i) => (
          <Tile key={i} letter={g} type={guessTypes[i]}/>
        ))}
      </div>
    )
  }
  return (<div className={("word-" + status)}>
      <Tile letter={word[0]} type={0}/>
      <Tile letter={word[1]} type={0}/>
      <Tile letter={word[2]} type={0}/>
      <Tile letter={word[3]} type={0}/>
      <Tile letter={word[4]} type={0}/>
  </div>)
} 