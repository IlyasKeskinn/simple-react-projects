export const Alert = ({errorMessage}) => {
    return (
        <div className="alert alert-danger">{errorMessage}</div>
    );
}