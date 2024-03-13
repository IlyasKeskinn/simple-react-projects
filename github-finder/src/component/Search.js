import  { useState } from 'react'
import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';
import { ErrorContext } from '../contexts/errorContext';


const Search = (props) => {

    const {searchUser,users, clearUsers}  = useContext(UserContext);
    const {sendError} = useContext(ErrorContext);

    const [keyword, setKeyword] = useState('');

    const changeInput = (e) => {
        setKeyword(e.target.value);
    }

    const searchSubmit = (e) => {
        e.preventDefault();

        if (keyword.length < 3) {
            sendError("Username must be greater than 3 characters", "warning");
        }
        else {
            searchUser(keyword);
            setKeyword('');
            clearUsers();
        }
    }

    return (
        <div>
            <form onSubmit={searchSubmit}>
                <div className='input-group'>
                    <input onChange={changeInput} value={keyword} className='form-control py-2 mt-3' placeholder='Search a username'></input>
                    <div className="input-group-append ">
                        <button className="btn btn-outline-warning py-2 mt-3 " type="submit">Button</button>
                    </div>
                </div>
            </form>
            {users.length > 0 ? <button onClick={clearUsers} className="btn btn-outline-danger w-100 py-2 mt-3 " type="button">Clear</button> : ''}
        </div>
    );
}

export default Search;