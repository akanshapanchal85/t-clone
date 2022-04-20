import React from 'react'
import Header from './components/Header'
import TinderCard from './components/TinderCard';
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
        <Route path='/' element={<TinderCard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App