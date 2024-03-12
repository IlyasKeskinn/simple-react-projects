import { useState } from "react";

const AddTodo = (props) => {
    const [todo, setTodo] = useState('');

    const changeTodo = (e) => {setTodo(e.target.value)};

    const addTodo = (e) => {
        e.preventDefault();
        props.newTodo(todo);
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