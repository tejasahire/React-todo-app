import React from 'react'
import './List.css';
import { Checkmark } from 'react-checkmark'
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const List = ({todolist,handleToggle,handleDelete}) => {

  return (
    
    <ul className='list'>
   {
     todolist.map((listitem)=><li key={listitem.id} className={listitem.done && 'done'}> 
        <span>{listitem.item}</span>
        <span className='actions'>
          {
            listitem.done ? <img style={{width:'30px'}}className='ab' src='https://pixsector.com/cache/6ecfa54e/avd0879fcbf810d38dc8e.png' onClick={()=>handleToggle(listitem.id)}/>:<img className='abc'style={{width:'20px'}} onClick={()=>handleToggle(listitem.id)} src='https://w7.pngwing.com/pngs/940/556/png-transparent-check-mark-symbol-svg-miscellaneous-cdr-angle.png'/>
          }
          <img  onClick={()=>handleDelete(listitem.id)} className='ab' src='https://cdn.iconscout.com/icon/free/png-256/free-delete-736-470378.png'/>
        </span>
        

     </li>)
   }    
   
    </ul>
    
  )
}

export default List