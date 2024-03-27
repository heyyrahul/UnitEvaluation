import { useState } from 'react';
import {  Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/Navbar';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleRegister = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home loggedIn={loggedIn} onLogout={handleLogout} />} />
        <Route exact path='/login' element={ <Login onLogin={handleLogin} />} />
        <Route exact path='/register' element={  <Register onRegister={handleRegister} />} />
      </Routes>
    </Router>
  );
}

export default App;
