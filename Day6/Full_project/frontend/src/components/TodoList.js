
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../utils/api';
import { setTodos } from '../store/actions/todoActions';
import TodoItem from './TodoItem';

function TodoList() {
  let todos = useSelector(state => state.todos); 
  const dispatch = useDispatch();
  // const [todos,setTodos] = useState([])
  // useEffect(() => {
  //   const value = useSelector(state => state.todos);
  //   setTodos(value) 
  // }, [dispatch]); 

  return (
    <>
    <ul>
      <p>hello todo</p>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} /> 
      ))}
    </ul>
    </>
  );
}

export default TodoList;