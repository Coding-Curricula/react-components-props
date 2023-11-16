import React from 'react'

import Genre from './components/Genre'
import Movie from './components/Movie'

export default function App() {
    return (
        <div>
            <h1>Movie App</h1>
            <Genre
                name="Science Fiction Films"
                description="Sci fi movies use technology like fantasy to explore the human condition in new exciting ways."
            />

            <Movie title="Alien" year={1979} />
            <Movie title="Back to the Future" year="1985" />
            <Movie title="Blade Runner" year="1982" />
            <Movie title="Star Wars" year="1977" />
            <Movie title="The Matrix" year="1999" />
        </div>
    )
}
