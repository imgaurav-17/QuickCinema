import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({title, movies}) => {
  return (
    <div>
        <div className='flex flex-col gap-y-5 px-3 md:px-5 py-2'>
            <h1 className='text-xs md:text-2xl font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll hide-scrollbar gap-3'>
              {movies.map(movie=> <MovieCard key={movie.id} posterPath={movie.poster_path}/>) }
            </div>
        </div>
    </div>
  )
}

export default Movielist