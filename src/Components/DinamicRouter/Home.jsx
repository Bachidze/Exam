import React from 'react'
import { data } from '../../data'
import { Link } from 'react-router-dom'

export default function Home() {
    console.log(data)
  return (
    <>
    <h1>Home</h1>
    {
        data.map(el => (
            <div>
                <Link to={`/${el.id}`}>
                {el.name}
                </Link>
            </div>
        ))
    }
    
    </>
  )
}
