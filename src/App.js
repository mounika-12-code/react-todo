import { useState } from 'react';
import './App.css';
import "../src/coponents/todo.css";
import List from './coponents/list';
function App() {
  const [list,setlist]=useState('');
  const [todo,settodo]=useState([]);
  const [filter,setfilter]=useState("all");

  const addTodo = (task) => {
    settodo([...todo, { text: task, completed: false }]);
  };



const change=(e) => {
  e.preventDefault();
  if (list.trim() !== '') {
    addTodo(list);
    setlist('');
  }
};

const deletehandler=(deleteindex)=>{
  const newlist=todo.filter((todo,index)=>
    deleteindex!==index
  )
  settodo(newlist);
}

const ontoggle=(index)=>
{
  const updatedcheck=[...todo];
  updatedcheck[index].completed=!updatedcheck[index].completed;
  settodo(updatedcheck);
}
  return (
    <>
    <form onSubmit={change}>
    <div className='parent'>
    <div className='input-parent '>
<input className='input-child' placeholder='enter the text' value={list} onChange={(e)=>{setlist(e.target.value)}} ></input>
<button className='button-first' type='submit' >
  Add to do
</button>
</div>
 <h5>To do List</h5>
<div  className='three-buttons'>
  <button className="but" onClick={()=>setfilter("all")}>ADD</button>
  <button  className="but" onClick={()=>setfilter("done")}>Done</button> 
 <button  className="but" onClick={()=>setfilter("undone")}>Todo</button>
</div>

<List todo={todo} onToggle={ontoggle} fun={deletehandler} list={list} settodo={settodo} setlist={setlist} filter={filter}/>
</div>
</form>
</>


  );
}

export default App;
