import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import {BrowserRouter} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
