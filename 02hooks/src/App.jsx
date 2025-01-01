import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [counter, setCounter] = useState(5)
const [remover, setRemover] = useState(7)
const addValue = () => {
  setCounter(counter + 1)
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