import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BestSeller from './components/main/BestSeller';


const App =()=>{
  return(
    <>

      
        <Router>
        <Routes>
         

          <Route path='/' element={<BestSeller /> }  />
          
          
          
          </Routes>
        </Router>
      
    </>
  )
}


export default App;

