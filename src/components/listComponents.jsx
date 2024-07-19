import React from 'react'

function listComponents({list,deleteItm}) {
  return (
    <div>
      <ul>
        {list.map((item,index)=>{
          return <li>{item} <button onClick={() =>deleteItm(index)}>Delete</button></li>
        })}
      </ul>
    </div>
  )
}

export default listComponents