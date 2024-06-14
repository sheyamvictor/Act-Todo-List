import React from 'react'

function Iteam(props) {

const activeArr = props.activeArr
const setActiveArr= props.setActiveArr

function HandelDel(delid){

    var tempArr =activeArr.filter(function(item){

if(item.id === delid){

    return false
} else{
    return true
}

    })

    setActiveArr(tempArr)

}


  return (
    <div className="flex justify-between">
    <p>{props.index+1}. {props.active}</p>
    <button className="text-red-600" onClick={()=>HandelDel(props.id)}>Delete</button>

    </div>
)
    
  }

export default Iteam