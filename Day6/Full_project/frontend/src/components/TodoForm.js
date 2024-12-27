import React, { use, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';
import { setTodos } from '../store/actions/todoActions';
import { addTodo as addTodoApi } from '../utils/api.js';
import { fetchTodos } from '../utils/api';

function TodoForm() {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    try {
      const response = await addTodoApi(newTodo);
      console.log(response?.data)
      dispatch(addTodo(response?.data)); // Dispatch the added todo from the API response
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchTodos(); 
        console.log(res?.data);
        dispatch(setTodos(res.data)); 
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Add Todo" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;