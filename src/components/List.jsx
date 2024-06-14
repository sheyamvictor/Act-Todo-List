import React  from 'react'
import Iteam from './Iteam'
function List(props) {

    const activeArr = props.activeArr
    const setActiveArr= props.setActiveArr
    


  return (
    <div className="bg-[#7C7EFF] border rounded-md p-4 flex-grow">
        
        <h1 className='text-2xl font-mono'>ToDo List</h1>
        
        {activeArr.length===0?<p>You haven't added anything yet</p>:""}

        {
activeArr.map(function(item,index){
    return<Iteam id={item.id}active={item.active} index={index} activeArr={activeArr} setActiveArr={setActiveArr}/>
})
        }

    </div>
  )
}

export default List  