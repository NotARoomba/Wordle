import React from 'react';

export default function Tile({letter, type}) {
  return (<div className={"tile"} id={"tile-"+type}>
      <p>{letter}</p>
  </div>)
} 