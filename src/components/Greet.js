import React from 'react';

export const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Greet: Hello - {props.name}</h1>
        </div>
    )
}
