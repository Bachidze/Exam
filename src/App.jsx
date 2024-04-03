import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Components/GreetingTask1/Greeting'
import ShowHide from './Components/ShowHide/ShowHide'
import TodoList from './Components/TodoList/TodoList'
import UseRef from './Components/UseRef/UseRef'
import Parent from './Components/Context/Parent'
import UseReducer from './Components/UseReducer/UseReducer'
import Timer from './Components/Timer/Timer'
import MemoParent from './Components/Memo/MemoParent'
import Home from './Components/DinamicRouter/Home'
import Post from './Components/DinamicRouter/Post'
import { Route, Routes } from 'react-router-dom'
import useFetchData from './hook/useFetchData'
function App() {

  const {data,setData} = useFetchData('https://jsonplaceholder.typicode.com/users')
  console.log(data)
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<Post />} />
    </Routes> 
   {/*  <Greeting 
    greeting={'name'}
    /> */}
    {/* <ShowHide /> */}
    {/* <TodoList /> */}
    {/* <UseRef /> */}
    {/* <Parent /> */}
    {/* <UseReducer /> */}
    {/* <Timer /> */}
    {/* <MemoParent /> */}
    </>
  )
}

export default App
