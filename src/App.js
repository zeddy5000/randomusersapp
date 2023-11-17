
import { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

import Navbar from './components/Navbar';
import UserCardBox from './components/UserCardBox';

function App() {


  return (
    
      <div>
        <Navbar/>
       <Router>
          <Routes>
              <Route path='/' exact Component={Home}/>
            
          </Routes>
       </Router>
       
      </div>
    
   
  );
}

export default App;
