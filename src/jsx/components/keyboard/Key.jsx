import React from "react";
import { WORD_SIZE, REVEAL_DELAY } from "../../Constants";

export default function Key({onChar, value, type, reveal}) {
    return (<div className="key" onClick={() => (onChar(value))} id={reveal?(reveal?"key-reveal-"+(type==undefined?0:type):""):"key-"+(type==undefined?0:type)} style={{animationDelay: (REVEAL_DELAY * WORD_SIZE) + 's' }}>
        {value=="DELETE"?<img src="/assets/delete.svg"/>:value=="ENTER"?<img src="/assets/corner-down-left.svg"/>:<p className={(reveal&&value!="ENTER"&&type!=undefined?"reveal":"")} style={{animationDelay: (REVEAL_DELAY * WORD_SIZE) + 's' }}>{value}</p>}
    </div>)
}