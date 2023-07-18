import React, { useState } from 'react';
import Tile from './Tile.jsx'
import { getGuessTypes } from '../../Constants.jsx';

export default function Word({status, word, answer, reveal, tut}) {
  if (word.length != answer.length) {
    word = [...word, ...Array(answer.length-word.length).fill(" ")]
  }
  const guessTypes = getGuessTypes(answer, word)
  return (<div className={("word-" + status)}>
  {[...word].map((g, i) => {
    return (tut != null&&tut[0]==i?<Tile key={i} pos={i} letter={g} type={tut[1]} reveal={reveal}/>:<Tile key={i} pos={i} letter={g} type={`${status!="complete"?0:guessTypes[i]}`} reveal={reveal}/>)
  })}
</div>)
} 