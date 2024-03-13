import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddTodo from './component/AddTodo';
import CardHeader from './component/CardHeader';
import TodoList from './component/TodoList';
import './style.css'
import TodosContextProvider from './contexts/todosContext';

const App = () => {
  return (
    <TodosContextProvider> 
      <div className=" todo-container">
        <div className="card">
          <CardHeader title ="Todo App"/>
          <TodoList/>
          <AddTodo/>
        </div>
      </div>
    </TodosContextProvider>
  );
}

export default App;
