import React from 'react'

function Email(props) {
    return (
        <div>
            <h1>{props.email}</h1>
            <h3>{props.subject}</h3>
            <p>{props.message}</p>
        </div>
    )
}

export default Email
