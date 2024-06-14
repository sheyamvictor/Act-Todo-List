import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login(props) {

const navigate=useNavigate()

const [Eusername,setEusername]=useState()
const[Epassword,setEpassword]=useState()

const[Ruser,setRuser]=useState(true)


const users =props.users


function handelUinput(evt){

setEusername(evt.target.value)
}

function handelPinput(evt){

setEpassword(evt.target.value)
}

function checkuser(){

  var userfound = false

users.forEach(function(item){

    if(item.username===Eusername && item.password===Epassword){
userfound=true
navigate("/Landing",{state:{username:Eusername}})

    }if(userfound===false){

setRuser(false)

    }


})

}

  return (
    <div className="bg-black p-10 flex-wrap" >
        <div className="bg-white p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi...👋</h1>
      { Ruser?<p>I help You manage ur activities after you login :) </p> :<p className="text-red-700 font-bold">"Please signup here..."</p>}
<div className="flex flex-col gap-2 my-2 flex-grow">
        <input type='text' 
        placeholder='Username' onChange={handelUinput}
         className="border border-black bg-transparent p-1 w-52  rounded-md "/>
        <input type='text' 
        placeholder='Password' onChange={handelPinput}
         className="border border-black bg-transparent p-1 w-52  rounded-md "/>

        <button onClick={checkuser} className="bg-[#5f63c6] border w-24  rounded-md p-2 text-white font-semibold">Login</button>
        <p>Don't have an account? <Link to={"/SignUp"} className="underline">SignUp</Link></p>
        </div>
        
        </div>
    </div>
  )
}

export default Login