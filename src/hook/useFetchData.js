import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetchData(url) {
   
 const [data,setData] = useState([])

 useEffect(() => {
    axios.get(url)
    .then(res => setData(res))
    .catch(er => console.log(er))

   },[])
   return {data,setData}

}
