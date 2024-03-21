import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  const [token, setToken] = useState()

  if(!token){
    return <Login setToken={setToken}/>
  }

  return (
   <div className="wrapper">
    <h1>Application</h1>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/preferences" element={<Preferences />}/>
    </Routes>

   </div>
  )
}

export default App;
