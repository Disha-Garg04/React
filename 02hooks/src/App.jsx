import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter, setCounter] = useState(5)
const addValue = () => {
  setCounter(counter++)
  setCounter(counter++)
  setCounter(counter++)
  // setCounter(counter++)
}
const removeValue = () => {
  setCounter(counter - 1)
}
  return (
    <>
      <h1>Learning Hooks 31/12/2024</h1>
      <h2>Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
