
import './App.css'
import State from './stat';
function App() {

  function event1() {
    alert("hi,welcome to react");
  }
  function event2(num) {
    alert(`1+1 = ${num + 1}`);
  }

  return (
    <>
      {/* Here are some way to handle event with react */}
      <h1>Event Handling With React</h1>
      <button onClick={event1}>Event 1</button>
      {/* when there is parameter we have to use arrow function to add event */}
      <button onClick={() => event2(1)}>Event 2</button>
      <h2>Exploring UseState Function from react</h2>
       <State></State>
    </>
  )
}

export default App
