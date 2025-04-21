import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllSingers from './map'

function App() {
   const singers = [
  {name:"Mehedi Hasan",age:"24",religion:"Islam"},
  {name:"Sanjina Akter",age:"23",religion:"Islam"},
  {name:"Bijoy Das",age:"24",religion:"Hindu"},
   ];

  return (
    <>
     {
      singers.map(individual=><AllSingers name ={individual.name} age= {individual.age} religion={individual.religion} ></AllSingers>)
     }
    </>
  )
}

export default App
