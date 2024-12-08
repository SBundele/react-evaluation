import { useState, createContext } from 'react'
import './App.css'
import Home from './components/pages/Home'
import OneCountry from './components/pages/OneCountry'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/layout/Navigation'

export const CountryName = createContext();

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <CountryName.Provider value={{name, setName}}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/name" element={<OneCountry />} />
          </Routes>
        </Router>
      </CountryName.Provider>
    </>
  );
}

export default App
