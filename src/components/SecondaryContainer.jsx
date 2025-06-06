import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from './Movielist'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
  return movies.nowPlayingMovies &&  movies.upcomingMovies && movies.popularMovies && (
    <>
     <div className='bg-black '>
         <div className='-mt-10 md:-mt-32 relative z-20'>
             <Movielist title="Now Playing" movies={movies?.nowPlayingMovies} />
             <Movielist title="Upcoming Movies" movies={movies?.upcomingMovies} />
             <Movielist title="Popular Movies" movies={movies?.popularMovies} />
             
         </div>
     </div>

    </>
  )
}

export default SecondaryContainer