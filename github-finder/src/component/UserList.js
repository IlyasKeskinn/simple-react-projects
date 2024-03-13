import User from './User';
import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';
import Loading from './Loading';

const UserList = () => {
    const { users, loading } = useContext(UserContext);
    if (loading) {
        return (<Loading />);
    } else {
        return (
            <div>
                {users.map((user, index) => (<User key={index} user={user} />))}
            </div>
        );
    }
}

export default UserList