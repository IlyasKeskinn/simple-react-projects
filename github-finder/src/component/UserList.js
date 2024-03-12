import User from './User';

const UserList = (props) => {
    let users = props.users || [];
    return (
        <div>
            {users.map((user, index) => (<User key = {index} user = {user} />))}
        </div>
    );
}

export default UserList