import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/actions/todoActions';
import { deleteTodos } from '../utils/api';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = async() => {
    try{
      const response = await deleteTodos(todo.id)
      dispatch(deleteTodo(todo.id));
      console.log(response)
    }catch(err){
     console.log("erro while deleting todo ", err)
    }
  };

  return (
    <li>
      <input type="checkbox" checked={todo?.completed} onChange={handleToggle} />
      {todo?.todo}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;

