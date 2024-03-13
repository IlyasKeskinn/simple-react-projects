import { useContext } from 'react';
import {TodosContext} from '../contexts/todosContext';

const CardHeader = (props) => {

    const {dispatch} = useContext(TodosContext);

    const clearTodos = () => dispatch({ type: "CLEAR_TODOS" });


    return (
        <div className = " card-header d-flex justify-content-between">
            <p className="lead">{props.title}</p>
            <button onClick={clearTodos} className="btn btn-outline-warning">Clear</button>
        </div>
    );
}

export default CardHeader;