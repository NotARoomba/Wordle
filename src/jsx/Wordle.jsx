import { useEffect } from 'react'

import Word from './Word.jsx'

import '../css/App.css'

export default function Wordle() {
  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.key);
      for (let child in $(".words-box")[0].children) {
        console.log($(".words-box")[0].children)
        if (child.textContent.length != 5) {
          child.textContent += e.key;
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  return (
    <>
      <div className="top-text">
        <p>Wordle</p>
      </div>
      <div className="words-box">
        <Word word={"aaaa"}/>
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