
import './App.css'
import Form from './components/form/Form'
import CustomHookForm from './components/formWithCustomHook/CustomHookForm'

import StateForm from './components/formWithUserState/StateForm'
import ReUseAbleForm from './components/ReUseAbleForm/ReUseAbleForm'
import UseRef from './components/useRefForm/UseRef'


function App() {

  function handleLoginSubmit(data){
      console.log("loginData",data);
  }
  function handleSingUpSubmit(data){
      console.log("SignUp",data);
  }
  function handlePersonalSubmit(data){
      console.log("Personal Data",data);
  }


  return (
    <>
      <h1> Reuseable Form</h1>
      <ReUseAbleForm handlDiffSubmit={handleLoginSubmit} formName={"Log In"}></ReUseAbleForm>
      <ReUseAbleForm handlDiffSubmit={handleSingUpSubmit} formName={"Sign Up"}></ReUseAbleForm>
      <ReUseAbleForm handlDiffSubmit={handlePersonalSubmit} formName={"Personal Info"}></ReUseAbleForm>
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
