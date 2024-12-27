const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import the pool

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM todos'); 
    res.json(rows);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { todo ,completed} = req.body;
    const [result] = await pool.query('INSERT INTO todos (todo,completed) VALUES (?,?)', [todo,completed]);
    res.status(201).json({ id: result.insertId, todo }); 
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ error: 'Failed to add todo' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const [result] = await pool.query('DELETE FROM todos WHERE id = ?', [id]); 

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Todo not found' }); 
    }

    res.status(204).json({msg:"successfully deleted "}); 
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Failed to delete todo' });
  }
});

module.exports = router;