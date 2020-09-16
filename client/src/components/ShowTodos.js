import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from "react-icons/fa";

const ShowTodos = () => {
    const [todos, setTodos] = useState([])
    async function getTodos() {
        const res = await axios.get("http://localhost:5000/todos")
        const todoArray = await res.data;
        setTodos(todoArray)
       
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
        <tr>
            <td>{todo.description}</td>
            <td><FaEdit/></td>
            <td><FaTrash/></td>
        </tr>
      ))}
    </tbody>
  </table>
        </>
    )
}
export default ShowTodos