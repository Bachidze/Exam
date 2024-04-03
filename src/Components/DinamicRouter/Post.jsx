import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../data'

export default function Post() {
    const params = useParams()
    const newdata = data.find(el => el.id === Number(params.id))
    console.log(newdata)
  return (
    <>
    
    <h1>
        name{newdata.name}
        name{newdata.lastname}
        addres{newdata.address}
    </h1>
    </>
  )
}
