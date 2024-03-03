import React from 'react'

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ""
        }
    }

    changeInput = (e) => {
        this.setState({ keyword: e.target.value })
    };

    searchSubmit = (e) => {
        e.preventDefault();
        if (this.state.keyword.length < 3) {
            this.props.sendError("Username must be greater than 3 characters", "warning")
        }
        else {
            this.props.searchUser(this.state.keyword);
            this.setState({ keyword: '' });
            this.props.clearUsers();
        }
    }

    render() {

        return (
            <div>
                <form onSubmit={this.searchSubmit}>
                    <div className='input-group'>
                        <input onChange={this.changeInput} value={this.state.keyword} className='form-control py-2 mt-3' placeholder='Search a username'></input>
                        <div className="input-group-append ">
                            <button className="btn btn-outline-warning py-2 mt-3 " type="submit">Button</button>
                        </div>
                    </div>
                </form>
                {this.props.users.length > 0 ? <button onClick={this.props.clearUsers} className="btn btn-outline-danger w-100 py-2 mt-3 " type="button">Clear</button> : ''}
            </div>
        )
    }
}

export default Search