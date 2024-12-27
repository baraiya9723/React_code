import axios from 'axios'
const apiUrl = 'http://localhost:3001/api/todos'


const fetchTodos = async ()=>{
  try{
   const  response = await axios.get(apiUrl);
   return response
  }catch(err){
    console.log(err,'err while fetching todos ')
    throw err;
  }
}

const addTodo = async(todo)=>{
  try{
    const response = await axios.post(apiUrl,{todo});
    return response
  }catch(err){
    console.log('err while addindg todo',err)
    throw err;
  }
}

const deleteTodos = async (id)=>{
  try{
   const  response = await axios.delete(`${apiUrl}/${id}`);
   return response
  }catch(err){
    console.log(err,'err while fetching todos') 
    throw err;
  }
}

export {fetchTodos,addTodo,deleteTodos}