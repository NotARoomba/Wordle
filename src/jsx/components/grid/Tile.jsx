import React from 'react';
import { REVEAL_DELAY } from '../../Constants';

export default function Tile({letter, type, pos, reveal}) {
  return (<div className={"tile"} id={reveal?(reveal?"tile-reveal-"+type:""):"tile-"+type} style={{animationDelay: (pos * REVEAL_DELAY) + 's' }}>
      <p className={(reveal?"reveal":"")} style={{animationDelay: (pos * REVEAL_DELAY) + 's' }}>{letter}</p>
  </div>)
} 