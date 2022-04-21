import React from 'react'
import Header from './components/Header'
import TinderCards from './components/TinderCards';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TinderCards/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App