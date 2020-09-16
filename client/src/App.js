import React from 'react';
import './App.css';
import UserInput from '../src/components/userInput'
import ShowTodos from '../src/components/ShowTodos'
function App() {
  return (
    <>
    <div className="container">
       <UserInput />
       <ShowTodos />
    </div>
      
    </>
  );
}

export default App;
