import React, {useState} from 'react';
import axios from 'axios';
const UserInput = () =>{
    const [description, setDescription] = useState("")
    const onSubmitForm = e =>{
        // console.log(description)
        e.preventDefault();
        axios.post("http://localhost:5000/todos", {description})
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log('error with posting', error)
            })

    }
    return (
            <>
            <h1 className="text-center my-5">Todo App</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
            <input type="text" placeholder="add todo" className="form-control" 
                value={description} 
                onChange={e =>setDescription(e.target.value)}/>
            <button className="btn-success">Add</button>
            </form>
            </>
    )
} 

export default UserInput;