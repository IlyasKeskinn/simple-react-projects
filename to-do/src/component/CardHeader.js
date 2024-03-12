const CardHeader = (props) => {
    return (
        <div className = " card-header d-flex justify-content-between">
            <p className="lead">{props.title}</p>
            <button onClick={props.clearTodos} className="btn btn-outline-warning">Clear</button>
        </div>
    );
}

export default CardHeader;