import React from 'react'

export default function Genre({name, description}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}
