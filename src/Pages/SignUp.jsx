import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function SignUp(props) {

const navigate= useNavigate()

const users = props.users
const setuser = props.setuser

const [Eusername,setEusername]=useState()
const[Epassword,setEpassword]=useState()
const[Cpassword,setCpassword]=useState()

function handelUinput(evt){

    setEusername(evt.target.value)
    

    }
    
    function handelPinput(evt){
    
    setEpassword(evt.target.value)
    }
    

    function handelCinput(evt){
      setCpassword(evt.target.value)
      setEpassword(evt.target.value ===Cpassword)
      
    }

    
  









function Adduser(){
    setuser([...users,{username:Eusername,password:Epassword ,confrimPassword:Cpassword}])
  
      navigate("/")
    
    
}

  return (
    
            <div className="bg-black p-10 flex-wrap" >
        <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi...👋</h1>
        <p>Sign Up here  :) </p>
<div className="flex flex-col gap-2 my-2 flex-grow">
        <input type='text' placeholder='Username' onChange={handelUinput}
         className="border border-black bg-transparent p-1 w-52  rounded-md "required/>
        <input type='password' placeholder='Password' onChange={handelPinput}
         className="border border-black bg-transparent p-1 w-52  rounded-md "required/>
                 <input type='password' placeholder=' confrimPassword' onChange={handelCinput}
         className="border border-black bg-transparent p-1 w-52  rounded-md "required/>


        <button onClick={Adduser}  className="bg-[#2f782a] border w-24  rounded-md p-2 text-white font-semibold">Signup</button>
        <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
        </div>
        
        </div>
    </div>

    
  )
}

export default SignUp