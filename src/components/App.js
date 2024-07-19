
import React from "react";
import InputContainer from "./inputContainer";
import ListComponents from "./listComponents";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  
  const [list , setList] = useState([])
  let temp = '';

  const colletValue = (e)=>{
    temp = e.target.value
  }

  const addValue = ()=>{

    setList([...list,temp])
    
  }

  const deleteItm = (index)=>{
    const newList = list.filter((_,i)=> i !== index);

    setList(newList)
  }

  return (
    <div>
       <h1>To-Do-List</h1>
      <InputContainer colletValue = {colletValue} addValue = {addValue} />
      <ListComponents list = {list} deleteItm = {deleteItm}></ListComponents>
    </div>
  )
}

export default App
