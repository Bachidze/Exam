import React, { useState } from 'react'

export default function ShowHide() {
    const [show,SetShow] = useState(true)
    const showHide = () => {
        SetShow(!show)
    }
  return (
    <>
    {show && <h1>Show hide</h1>}
    <button onClick={showHide}>Click to hide</button>
    </>
  )
}
