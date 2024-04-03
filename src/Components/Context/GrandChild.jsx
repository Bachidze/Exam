import React, { useContext } from 'react'
import { Context } from './Parent'

export default function GrandChild() {
    const {setInput,input} = useContext(Context)
    console.log(setInput)
    console.log(input)
  return (
    <>
    <div>GrandChild</div>
    <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  )
}
