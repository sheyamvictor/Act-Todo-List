import React,{ useState }  from 'react'
import AddFrom from './AddFrom'
import List from './List'

function TodoContainer() {

    const [activeArr,setActiveArr]= useState([
        {
        id:1,
        active:"Go for Walk"
        },
        
        {
            id:2,
            active:"have a break"
        }
        
            ])
        




  return (
    <div className='flex gap-3 flex-wrap p-5'>
        <AddFrom activeArr={activeArr} setActiveArr={setActiveArr}/>
        <List activeArr={activeArr} setActiveArr={setActiveArr} />
    </div>
  )
}

export default TodoContainer