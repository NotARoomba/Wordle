import React from "react";

export default function Key({onChar, value}) {
    return (<div className="key" onClick={() => (onChar(value))}>
        {value=="DELETE"?<img src="/assets/delete.svg"/>:<p>{value}</p>}
    </div>)
}