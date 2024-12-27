const initialState = []; // Initial state: an empty array of todos

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': 
      return [...state, { id: action.payload.id, todo: action.payload.todo, completed: false }];

    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);

    case 'SET_TODOS':
      return action.payload;

    default:
      return state; 
  }
};

export default todoReducer;