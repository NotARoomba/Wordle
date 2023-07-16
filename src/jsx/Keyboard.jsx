import React, {useEffect} from "react";
import Key from "./Key";

export default function Keyboard({onChar, onEnter, onDelete}) {
    useEffect(() => {
        function handleKeyDown(e) {
          if (e.key == "Backspace") return onDelete()
          if (e.key == "Enter") return  onDelete()
          if (!"QWERTYUIOPASDFGHJKLZXCVBNM".includes(e.key.toUpperCase())) return
          return onChar(e.key.toUpperCase())
        }
        document.addEventListener('keydown', handleKeyDown);
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      }, []);
    return (<div className="keyboard">
        <div  className={"keyboard-row"}> {[..."QWERTYUIOP"].map((k) => 
        (<Key key={k} value={k} onChar={onChar}/>))}</div>
        <div  className={"keyboard-row"}> {[..."ASDFGHJKL"].map((k) => 
        (<Key key={k} value={k} onChar={onChar}/>))}</div>
        <div className={"keyboard-row"}>
            <Key key={"ENTER"} value={"ENTER"} onChar={onEnter}/>
            {[..."ZXCVBNM"].map((k) => 
            (<Key key={k} value={k} onChar={onChar}/>))}
            <Key key={"DELETE"} value={"DELETE"} onChar={onDelete}/>
        </div>
    </div>)
}