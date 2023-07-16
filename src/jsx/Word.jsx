import React, { useState } from 'react';
import Tile from './Tile.jsx'

export default function Word({status, word}) {
  return (<div className={("word-" + status)}>
      <Tile letter={word[0]}/>
      <Tile letter={word[1]}/>
      <Tile letter={word[2]}/>
      <Tile letter={word[3]}/>
      <Tile letter={word[4]}/>
  </div>)
} 