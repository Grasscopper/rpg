import React from 'react'

const Employee = (props) => {
    return (
        <li>
            <p>{props.firstName} {props.lastName}</p>
            <p>{props.description}</p>
        </li>
    )
}

export default Employee