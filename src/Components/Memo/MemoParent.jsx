import React, { useState } from 'react'
import MemoChild from './MemoChild'

const MemoParent = () => {
    const [counter,setCounter] = useState(0)
  return (
    <>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>Click To increase</button>
    <MemoChild />
    </>
  )
}

export default React.memo(MemoParent)