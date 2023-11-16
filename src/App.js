import React from 'react'

import Genre from './components/Genre'
import Movie from './components/Movie'

export default function App() {

    const movies = [
        { title: "Alien", year: 1979 },
        { title: "Back to the Future", year: 1985 },
        { title: "Blade Runner", year: 1982 },
        { title: "Star Wars", year: 1977 },
        { title: "The Matrix", year: 1999 }
    ]

    return (
        <div>
            <h1>Movie App</h1>
            <Genre
                name="Science Fiction Films"
                description="Sci fi movies use technology like fantasy to explore the human condition in new exciting ways."
            />

            {movies.map((movie) => {
                return (
                    <Movie
                    key={movie.title}
                        title={movie.title}
                        year={movie.year}
                    />
                )
            })}
        </div>
    )
}
