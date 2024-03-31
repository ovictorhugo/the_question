import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  { UserContext }  from '../src/context/context'
import { Home } from './pages/Home'
import { useState } from 'react';

function App() {
  const [geral, setGeral] = useState('');

  return (
    <>
    <Router>
    <UserContext.Provider 
    value={{
      geral, setGeral
    }}
    >
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </UserContext.Provider>
    </Router>
    </>
  )
}

export default App
