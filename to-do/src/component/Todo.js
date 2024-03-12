const Todo = (props) => {

    const removeTodo = () =>{
        props.removeTodo(props.id);
    }

    return (
        <li className="list-group-item todo-item d-flex justify-content-between">{props.title} <button onClick={removeTodo} className='btn btn-outline-danger rounded-pill'>X</button> </li>
    );
}

export default Todo;