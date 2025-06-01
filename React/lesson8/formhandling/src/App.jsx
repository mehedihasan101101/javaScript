
import './App.css'
import Form from './components/form/Form'
import CustomHookForm from './components/formWithCustomHook/CustomHookForm'

import StateForm from './components/formWithUserState/StateForm'
import UseRef from './components/useRefForm/UseRef'


function App() {



  return (
    <>
      <h1>Form handling with Custom Hook</h1>
      <CustomHookForm></CustomHookForm>
      <h1>Form with useRef</h1>
      <UseRef></UseRef>
      <h1>Form With User State</h1>
      <StateForm></StateForm>
      <hr />
      <h1>Form With Normal Js</h1>
      <Form></Form>
    </>
  )
}

export default App
