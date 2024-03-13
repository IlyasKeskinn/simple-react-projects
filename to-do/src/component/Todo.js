import { useContext } from 'react';
import {TodosContext} from '../contexts/todosContext';

const Todo = ({title, id}) => {

  const {dispatch} = useContext(TodosContext);

    const removeTodo = () => {
        dispatch({
          type : "REMOVE_TODO",
          id : id
        })
      }

    return (
        <li className="list-group-item todo-item d-flex justify-content-between">{title} <button onClick={removeTodo} className='btn btn-outline-danger rounded-pill'>X</button> </li>
    );
}

export default Todo;