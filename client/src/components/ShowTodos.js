import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrash} from "react-icons/fa";
import './style.css'
import EditTodo from './EditTodo';
const ShowTodos = () => {
    const [todos, setTodos] = useState([])
    //to get the todos
    async function getTodos() {
        const res = await axios.get("http://localhost:5000/todos")
        const todoArray = await res.data;
        setTodos(todoArray)
       
    }
    //to delete a todo
    async function deleteTodo (id) {
        const res = await axios.delete(`http://localhost:5000/todos/${id}`)
        console.log(res)
    }

    useEffect(() =>{
        getTodos()
    }, [todos]);
    return (
        <>
            <table className="table table-hover my-5">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo={todo}/></td>
            <td><FaTrash className={"trashStyle"} onClick={() => deleteTodo(todo.todo_id)} cursor={"pointer"}/></td>
        </tr>
      ))}
    </tbody>
  </table>
        </>
    )
}
export default ShowTodos