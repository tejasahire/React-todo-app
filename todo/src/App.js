
import './App.css';
import react, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from './Componont/List';
import { ListItem } from '@mui/material';

function App() {
  const [text, setText] = useState("")
  const [todolist, setTodolist] = useState([])
  const addItem = () => {
  let newtodoItem={
    id:uuidv4(),
    item:text,
    done:false,
   }
   setTodolist([...todolist,newtodoItem])
   setText('')
  }
  const handleToggle=(item)=>{
 const newTodolist=   todolist.map((litem)=>{
      if(litem.id===item){
        return{...litem,done:!litem.done}
      }
      return litem
    })
    setTodolist(newTodolist)
  }
  const handleDelete =(item)=>{
    const newTodolist= todolist.filter((litem)=>litem.id!=item)
     setTodolist(newTodolist)
     
  }
  
  // console.log(todolist)
  // console.log(todolist)
  // console.log(text)
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="adder">
         <input type="text" placeholder="Add Todo" value={text} onChange={(e)=>setText(e.target.value)}/>
         <span onClick={addItem}>+</span>
      </div>
     <List todolist={todolist} handleToggle={handleToggle} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
