import React, {useState} from "react";
import {FaEdit } from "react-icons/fa";
import './style.css'
import Axios from "axios";
const EditTodo = ({todo}) => {
    // console.log(todo)
    const [description, setDescription] = useState(todo.description)
    const editDescription = async (id) => {
        const res = await Axios.put(`http://localhost:5000/todos/${id}`, {description})
    }
    return (
        <>
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal"> */}
            <FaEdit type="button" data-toggle="modal" data-target={`#id${todo.todo_id}`} className="editBtn"/>
{/* </button> */}


<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog" onClick={() => setDescription(todo.description)}>
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal" onClick={()=> setDescription(todo.description)}>&times;</button>
      </div>

     
      <div class="modal-body">
       <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
      </div>
     
      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={() => editDescription(todo.todo_id)}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>

        </>
    )
}

export default EditTodo