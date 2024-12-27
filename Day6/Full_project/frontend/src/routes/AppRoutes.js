import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <h1>Todo List</h1>
          <TodoForm />
          <p>hellos </p>
          <TodoList />
        </div>
      } />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default AppRoutes;