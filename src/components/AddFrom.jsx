import React, { useState } from 'react'

function AddFrom(props) {

    const activeArr = props.activeArr
    const setActiveArr = props.setActiveArr

    const [newactive, setnewactive] = useState("")

    function handelChange(evt) {
        setnewactive(evt.target.value)
    }

    function Addbtn() {

        setActiveArr([...activeArr,{ id: activeArr.length+1, active:newactive }])

        setnewactive(" ")

    }

    return (
        <div className='flex flex-col gap-3 '>
            <h1 className="text-2xl font-medium">Manage Activites</h1>
            <div>
                <input type='text' onChange={handelChange} placeholder='Next Activity?' className="border border-black bg-transparent p-1" />
                <button onClick={Addbtn} className='bg-black text-gray-50 p-1 border border-black'>Add</button>
            </div>
        </div>
    )
}

export default AddFrom