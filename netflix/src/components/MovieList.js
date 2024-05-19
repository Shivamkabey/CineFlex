import React from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
  return (
    <div>
      <h1>Popular Movie</h1>
      <div>
        <div className='flex items-center'>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        
        </div>
      </div>
    </div>
  )
}

export default MovieList