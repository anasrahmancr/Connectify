import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element = {<Login/>}/> 
          <Route path='/register' element = {<Signup/>}/>
          <Route path='/home' element = {<Home/>}/>
          <Route path='/profile' element = {<Profile/>}/>
        </Routes>
      </div>
    </Router>
  ) 
}

export default App
