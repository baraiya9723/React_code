import {Todoprovider} from './Context'
import './App.css';
import { useState } from 'react';
import TodoForm from './Component/TodoForm';
import TodoItem from './Component/TodoIteam';
function App() {  
  const [todos, setTodos] = useState([])
  const addTodo= (todo)=>{
    console.log("app.js",todos)
    setTodos(prev => [...prev, {...todo, id:Date.now()}])
    console.log("app.js",todos)
  }
  const deleteTodo = (id)=>{
    setTodos(prev => prev.filter((prevTodo)=>prevTodo.id !== id))
  }
  const updateTodo = (id , todos)=>{
   setTodos(prev => prev.map(prevTodo=> prevTodo.id == id ? todos: prevTodo))
  }
  const toggleComplete = (id)=>{
   setTodos(prev => prev.map(prevTodo => prevTodo.id == id ? {...prevTodo,completed: !prevTodo.completed}:prevTodo))
  }
  return (
    <Todoprovider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
        </div>
    </div>
</div>
</Todoprovider>
  );
}

export default App;
