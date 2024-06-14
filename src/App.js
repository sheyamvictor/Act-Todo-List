import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


function App() {
      const[users,setuser]=useState(

    [
        {
            username:"Joseph",
            password:"123"
        }
    ]
  )


return(    <>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Login users={users} setuser={setuser}/>}></Route>
        <Route path='/Signup' element={<SignUp users={users} setuser={setuser} />}></Route>
<Route path='/Landing'element={<Landing/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
   
    </>


)
}

export default App;
