import React, { useContext } from 'react'
import { ErrorContext } from '../contexts/errorContext'

const Alert = () => {
    const {error} = useContext(ErrorContext);
    if (error) {
        return (
            <div className={`alert alert-${error.alert} mt-3`} role="alert">
                {error.msg}
            </div>
        )
    }

}

export default Alert