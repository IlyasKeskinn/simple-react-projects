import { useContext } from 'react';
import {TodosContext} from '../contexts/todosContext';
import Todo from './Todo';

const TodoList = () => {

    const {todos} = useContext(TodosContext)
    return (
        <div className="card-body">
            {todos.length  <= 0 ?
                <p className='lead'>There are no attached tasks</p> :
                <ul className="list-group-flush">
                    {todos.map((item) => <Todo key={item.id} title={item.title} id={item.id} />)}
                </ul>
            }
        </div>
    );

}

export default TodoList;