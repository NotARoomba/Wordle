import React from "react";

export default function Key({onChar, value, type}) {
    return (<div className="key" onClick={() => (onChar(value))} id={"key-"+type}>
        {value=="DELETE"?<img src="/assets/delete.svg"/>:<p>{value}</p>}
    </div>)
}