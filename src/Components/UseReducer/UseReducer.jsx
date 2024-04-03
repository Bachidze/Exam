import React, { useReducer } from 'react'
const initialValue = {
    Count:0,
}

export default function UseReducer() {

    const reducer = (state,action) => {
        switch(action.type){
            case 'INC':
                return {Count:state.Count + 1}
            case 'DEC':
                return {Count:state.Count - 1}
            case 'RES':
                return {Count:0}

        }
    }
    const [state,dispatch] = useReducer(reducer,initialValue)
  return (
    <>
    <h1>UseReducer</h1>
    <h1>{state.Count}</h1>
    <button onClick={() => {
        dispatch({
            type:'INC'
        })
    }}>INC</button>
    <button onClick={() => {
        dispatch({
            type:'DEC'
        })
    }}>DEC</button>
    <button onClick={() => {
        dispatch({
            type:'RES'
        })
    }}>RES</button>
    </>
  )
}
