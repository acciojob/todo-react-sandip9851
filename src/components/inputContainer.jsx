import React from 'react'

function inputContainer({colletValue,addValue}) {
  return (
    <div>
      <input type="text" placeholder='ADD TASK' onChange={(e)=>{colletValue(e)}} />
    <button onClick={addValue}>Add Todo</button>
    </div>
    
  )
}

export default inputContainer