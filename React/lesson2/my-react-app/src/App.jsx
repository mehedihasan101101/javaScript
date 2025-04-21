import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <HeroSection></HeroSection>
      <Employees Name="Mehedi Hasan" Age="23" Qualification="web Engineer"></Employees>
      <Employees Name="Sanjina" Age="22" Qualification="Mehedir Assistant"></Employees>
      <DesEmployees Name="Rohid" Age="22" Qualification="Mali" ></DesEmployees>
    </>
  )
}
function HeroSection() {
  const aboutMe = {
    Name: "Mehedi Hasan",
    Age: 23,
    Occupation: "Web Engineer",

  };

  const objectStyle = {
    border: "1px solid purple",
    borderRadius: "5px",
    padding: "5px",
    marginTop: "5px"
  }

  return (


    <>
      {/* // for this div css is used from index.css */}
      <div className='aboutMe'>
        <h1>My Name is {aboutMe.Name} </h1>
        <h1>I am a {aboutMe.Occupation} </h1>
        <h1>Age: {aboutMe.Age} </h1>
      </div>

      {/* in this div i will use style from an object */}
      <div style={objectStyle}>
        <h1>My Name is {aboutMe.Name} </h1>
        <h1>I am a {aboutMe.Occupation} </h1>
        <h1>Age: {aboutMe.Age} </h1>
      </div>
    </>
  )
}

// here is the technique to use dynamic data from properties that has been set in the function app().This method is not recommended 
function Employees(props) {
  return (
    <>
      <div style={{
        border: "1px solid blue",
        padding: "10px",
        margin: "10px"
      }}>
        <h5>Name : {props.Name} </h5>
        <h5>age: {props.Age} </h5>
        <h5>Course: {props.Qualification} </h5>
      </div>


    </>
  )
}

// this function will use Destructuring to set data dynamically

function DesEmployees({Name, Age, Qualification}) {
  return (
    <>
      <div>
        <h1>Dynamic Data By Destructuring</h1>
        <h5>Name: {Name} </h5>
        <h5>age: {Age} </h5>
        <h5>Course: {Qualification} </h5>
      </div>
    </>
  )
}

export default App
