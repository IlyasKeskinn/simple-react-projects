import { useState } from "react";
import { useContext } from 'react';
import {TodosContext} from '../contexts/todosContext';
const AddTodo = () => {
    const  {todos, dispatch } = useContext(TodosContext);
    const [todo, setTodo] = useState('');

    const changeTodo = (e) => {setTodo(e.target.value)};

    const addTodo = (e) => {
        e.preventDefault();
        dispatch({
            type : "ADD_TODO",
            id : todos.length +1 ,
            title : todo
          })
        setTodo('');
        
    }

 

    return (
        <div className="card-footer d-flex">
            <div className="input-group w-70 ">
                <input className="form-control" onChange={changeTodo} value={todo}></input>
            </div>
            <div className="input-group-append w-30">
                <button type="submit" onClick={addTodo} className=" btn btn-primary w-100 add-btn">Add Todo</button>
            </div>
        </div>

    );

}

export default AddTodo;