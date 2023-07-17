import React from 'react'

export default function Error({desc}) {
  return (<div className={"error"+(desc[1]?" animate":"")}>
    {desc}
  </div>)
}