import React, { createContext, useContext, useState } from 'react'
import Child from './Child'

export const  Context = createContext(null)

export default function Parent() {
    const [input,setInput] = useState('parent')
  return (
    <>
    <Context.Provider value={{setInput,input}}>
    {input}
    <Child />
    </Context.Provider>
    </>
  )
}
