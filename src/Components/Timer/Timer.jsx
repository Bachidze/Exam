import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [start,setStart] = useState(false)
    const [time,setTime] = useState(10)

    useEffect(() => {
        let interval = 0;
        if(start && time > 0){

            interval = setInterval(() => {
                setTime(prev => prev  - 1)
            
            },1000)
        }else{
                clearInterval(interval)
        }
        return () => {
                clearInterval(interval)
        }
    },[start,time])

  return (
    <>
    <h1>{time}</h1>
    <button onClick={() => setStart(true)}>START</button>
    <button onClick={() => setStart(false)}>STOP</button>
    <button onClick={() => {
        setStart(false)
        setTime(10)
    }}>RESET</button>
    </>
  )
}
