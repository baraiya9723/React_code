import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
//   we can set variable also count and update on function click , but its not update in UI secction 
// because UI is updation is fully control by react 
// insted of variable if we pass our count into use state hook then one chnages is our in our varibae parth 
// then it will search and update all count present it this UI 
const addcout = ()=>{
 setCount(count =>count+1)
}
const removecount = ()=>{
  if(count >0){
    setCount(count-1)
  }
}
  return (
    <>
     <p> count number is  {count}</p>
     <button onClick={addcout}>add </button>
     <button onClick={removecount}>remove</button>
    </>
  )
}

export default App
