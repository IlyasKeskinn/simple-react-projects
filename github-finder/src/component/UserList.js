import React from 'react'
import User from './User';

export class UserList extends React.Component {
    render() {
        let users = this.props.users || [];
        return (
            <div>
                {users.map((user, index) => (
                    <User key={index} user={user} />
                ))}
            </div>
        )
    }
}

export default UserList