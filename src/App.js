import React from 'react'
import TodoForm from './Component/TodoForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App h-auto d-inline-block">
      <div className="container text-center rounded ">
        <TodoForm />
      </div>
    </div>
  )
}

export default App
