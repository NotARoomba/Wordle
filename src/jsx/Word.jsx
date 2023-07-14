import React from 'react';
import Tile from './Tile.jsx'

export default function Word(props) {
  return (<div className="word">
      <Tile letter={props.word[0]}/>
      <Tile letter={props.word[1]}/>
      <Tile letter={props.word[2]}/>
      <Tile letter={props.word[3]}/>
      <Tile letter={props.word[4]}/>
  </div>)
} 