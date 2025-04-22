import { useState } from 'react'

import './App.css'
import AllUsers from './users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <AllUsers></AllUsers>
    </>
  )
}

export default App
