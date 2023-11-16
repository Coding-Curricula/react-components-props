import React from 'react'

const Movie = ({ title, year }) => {
    return (
        <div>
            <ul>
                <li key={title}>
                    <h3>{title}</h3>
                    <p>{year}</p>
                </li>
            </ul>
        </div>
    )
}

export default Movie