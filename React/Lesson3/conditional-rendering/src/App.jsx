import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// this is a function imported from conditional rendering jsx file

import ProjectStatus from './conditionalRen'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ProjectStatus ProjectName="Web App" TeamMember={2} ProjectStatus={true}></ProjectStatus>
       <ProjectStatus ProjectName="Mobile App" TeamMember={4} ProjectStatus={false}></ProjectStatus>
       <ProjectStatus ProjectName="Desktop App" TeamMember={6} ProjectStatus={true}></ProjectStatus>
       <ProjectStatus ProjectName="Game Development" TeamMember={2} ProjectStatus={false}></ProjectStatus>
       <ProjectStatus ProjectName="Music Web App" TeamMember={4} ProjectStatus={false}></ProjectStatus>

    </>
  )
}

export default App
