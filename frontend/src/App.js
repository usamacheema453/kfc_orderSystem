import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BestSeller from './components/main/BestSeller';
import Menu from './components/main/Menu';
import Sidebar from './components/main/Sidebar';
import Login from './components/login/Login';
import MenuDetails from './components/main/MenuDetails';
import Bucket from './components/main/Bucket';


const App =()=>{
  return(
    <>

      
        <Router>
        <Routes>
         

          <Route path='/' element={<BestSeller /> }  />
          <Route path="/menu" element={<Menu /> } />
          <Route path='/menu/item' element={<MenuDetails /> } />
          <Route path='/sidebar' element={<Sidebar /> } />
          <Route path='/bucket' element={<Bucket /> } />

          <Route path='/login' element={<Login /> } />
          
        
          
          
          </Routes>
        </Router>
      
    </>
  )
}


export default App;

