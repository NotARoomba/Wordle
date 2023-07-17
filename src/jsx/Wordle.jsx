import { useState } from 'react'

import Word from './Word.jsx'

import '../css/App.css'

export default function Wordle() {
  
  return (
    <>
      <div className="top-text">
        <p>Wordle</p>
      </div>
      <div className="words-box"   onKeyDown={e => console.log('onKeyDown')}
  onKeyUp={e => console.log('onKeyUp')}>
        <Word word={""}/>
        <Word word={""}/>
        <Word word={""}/>
        <Word word={""}/>
        <Word word={""}/>
        <Word word={""}/>
      </div>
      <div className="keyboard-box">
      </div>
    </>
  )
}