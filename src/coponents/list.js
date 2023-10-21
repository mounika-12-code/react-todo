import React, { useState } from 'react';
import "./todo.css";

function List({ todo, onToggle, fun, settodo, filter }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const updateTodo = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index] = { ...updatedTodo[index], text: editedText };
    settodo(updatedTodo);
    setEditIndex(null);
    setEditedText('');
  };

  const filterHandle = () => {
    if (filter === "done") {
      return todo.filter(task => task.completed);
    } else if (filter === "undone") {
      return todo.filter(task => !task.completed);
    } else {
      return todo;
    }
  };

  return (
    <div className='lsit-parent'>
      {filterHandle().map((task, index) => (

        <div className="list" key={index}>
          {editIndex === index ? (
            <div className='update-feilds'>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button className='buuton-update' onClick={() => updateTodo(index)}>Update</button>

            </div>
          ) : (
            <>
            <div className='check-list-button'>
             <div className='checkbox'>
            <input 
            type='checkbox' 
            checked={task.completed} 
            onChange={()=>onToggle(index) }/>
            </div>

              <h5 className='dispaly-list' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </h5>
              <div className='two-button'>
              <button className='Delet-button' onClick={() => fun(index)}>Delete</button>
              <button  className='Delet-button'  onClick={() => {
              
               setEditIndex(index);
                setEditedText(task.text); 
              }}>Edit</button>
               </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default List;
