import { useEffect } from 'react'

import Word from './Word.jsx'

import '../css/App.css'

export default function Wordle() {
  useEffect(() => {
    function handleKeyDown(e) {
      console.log(e.key);
      for (let child in $(".words-box")[0].children) {
        console.log($(".words-box")[0].children)
        if (child.word.length != 5) {
          chold.word += e.key;
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
        <Word word={"aaaaaa"}/>
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