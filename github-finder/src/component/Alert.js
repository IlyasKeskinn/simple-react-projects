import React from 'react'

function Alert(props) {
    if (props.error) {
        return (
            <div className={`alert alert-${props.error.alert} mt-3`} role="alert">
                {props.error.msg}
            </div>
        )
    }

}

export default Alert