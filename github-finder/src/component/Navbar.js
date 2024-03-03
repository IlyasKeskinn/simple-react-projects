import React from 'react'
import PropTypes from 'prop-types';

export class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <a href='/' className='navbar-brand'>
                        <i className={this.props.icon}></i>
                        <span className='ms-2 '>{this.props.title}</span>
                    </a>
                </div>
            </div>
        )
    }
}

Navbar.defaultProps = {
    icon: "bi bi-github",
    title: "Github Finder"
}

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Navbar