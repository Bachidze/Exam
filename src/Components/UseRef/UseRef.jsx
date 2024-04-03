import React, { useRef } from 'react'

export default function UseRef() {
    const changeColor = useRef()
    const handleColor = () => {
        changeColor.current.style.backgroundColor = 'blue'
    }

  return (
    <>
    <h1>UseRef</h1>
    <div ref={changeColor} style={{backgroundColor:'red',width:'200px',height:'200px'}}>
    </div>
    <button onClick={() => handleColor()}>Change Color</button>
    </>
  )
}
