import React from 'react'

function User(props) {
    const { login, avatar_url, html_url } = props.user || {};

    return (
        <div className='card mt-3'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-3 '>
                        <img className='img-fluid img-100' alt={login + "photo"} src={avatar_url}></img>
                    </div>
                    <div className='col-9 '>
                        <p className='lead'>{login}</p>
                    </div>
                </div>
            </div>
            <div className='card-footer'>
                <a href={html_url} target='blank' alt={login} className='btn btn-success w-100'>View Profile</a>
            </div>
        </div>
    )
}


export default User