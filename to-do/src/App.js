import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddTodo from './component/AddTodo';
import CardHeader from './component/CardHeader';
import TodoList from './component/TodoList';
import './style.css'
import { useEffect, useState } from 'react';

const App = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) {
      setTodos(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const newTodo = (todo) => {
    setTodos([...todos, { "id": todos.length + 1, "title": todo }]);
  }

  const removeTodo =  (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const clearTodos = () => setTodos([]);
  
  return (
    <div className=" todo-container">
      <div className="card">
        <CardHeader title="Todo List" clearTodos={clearTodos} />
        <TodoList todos={todos}  removeTodo= {removeTodo} />
        <AddTodo newTodo={newTodo} />
      </div>
    </div>
  );
}

export default App;
