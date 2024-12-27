const db = require('../models/Todo')

const todoController = {
  async getAllTodos(req, res) {
    try {
      const todos = await db.todos.findAll();
      res.json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ message: 'Error fetching todos' });
    }
  },

  async createTodo(req, res) {
    try {
      const { todo } = req.body;
      const newTodo = await db.Todo.create({ todo });
      res.status(201).json(newTodo);
    } catch (error) {
      console.error('Error creating todo:', error);
      res.status(500).json({ message: 'Error creating todo' });
    }
  },

  // Add updateTodo and deleteTodo methods here
};

module.exports = todoController;