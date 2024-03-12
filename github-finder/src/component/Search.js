import  { useState } from 'react'

const Search = (props) => {

    const [keyword, setKeyword] = useState('');

    const changeInput = (e) => {
        setKeyword(e.target.value);
    }

    const searchSubmit = (e) => {
        e.preventDefault();

        if (keyword.length < 3) {
            props.sendError("Username must be greater than 3 characters", "warning");
        }
        else {
            props.searchUser(keyword);
            setKeyword('');
            props.clearUsers();
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
            {props.users.length > 0 ? <button onClick={props.clearUsers} className="btn btn-outline-danger w-100 py-2 mt-3 " type="button">Clear</button> : ''}
        </div>
    );
}

export default Search;