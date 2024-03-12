import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="card-body">
            {props.todos.length  <= 0 ?
                <p className='lead'>There are no attached tasks</p> :
                <ul className="list-group-flush">
                    {props.todos.map((item) => <Todo key={item.id} title={item.title} id={item.id} removeTodo={props.removeTodo} />)}
                </ul>
            }

        </div>
    );

}

export default TodoList;