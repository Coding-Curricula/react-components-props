import React from 'react'

const Genre = ({ name, description }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <h1>Movie App</h1>
            <Genre
                name="Science Fiction Films"
                description="Sci fi movies use technology like fantasy to explore the human condition in new exciting ways."
            />
            <h3>Alien</h3>
            <p>Year: 1979</p>
            <h3>Back to the Future</h3>
            <p>Year: 1985</p>
        </div>
    )
}
