import React, {useEffect} from "react";
import Key from "./Key";
import { getLetterTypes } from "../../Constants";

export default function Keyboard({onChar, onEnter, onDelete, answer, guesses, reveal}) {
    useEffect(() => {
        function handleKeyDown(e) {
          if (e.key == "Backspace") return onDelete()
          if (e.key == "Enter") return  onEnter()
          if (!"QWERTYUIOPASDFGHJKLZXCVBNM".includes(e.key.toUpperCase())) return
          return onChar(e.key.toUpperCase())
        }
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      }, []);
      const letterTypes = getLetterTypes(answer, guesses)
    return (<div className="keyboard">
        <div  className={"keyboard-row"}> {[..."QWERTYUIOP"].map((k) => 
        (<Key key={k} value={k} onChar={onChar} type={letterTypes[k]} reveal={reveal}/>))}</div>
        <div  className={"keyboard-row"}> {[..."ASDFGHJKL"].map((k) => 
        (<Key key={k} value={k} onChar={onChar} type={letterTypes[k]} reveal={reveal}/>))}</div>
        <div className={"keyboard-row"}>
            <Key key={"ENTER"} value={"ENTER"} onChar={onEnter}/>
            {[..."ZXCVBNM"].map((k) => 
            (<Key key={k} value={k} onChar={onChar} type={letterTypes[k]} reveal={reveal}/>))}
            <Key key={"DELETE"} value={"DELETE"} onChar={onDelete}/>
        </div>
    </div>)
}