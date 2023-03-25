import React from 'react'
import Draggable from 'react-draggable';
import { useState } from 'react';


export const Text = () => {
  const [editMode,SetEditMode] = useState(false);
  const [val, setVal] = useState('Double Click to Edit');
  

  return (
    <Draggable>
      {editMode ?(
      <input
      onDoubleClick={()=>{  SetEditMode(false)}}
      value={val}
      onChange={(e)=>setVal(e.target.value)}
      />
      ):(<h1 onDoubleClick={()=>{ SetEditMode(true)}}>{val}</h1>)  
    }
    </Draggable>


  )
}
