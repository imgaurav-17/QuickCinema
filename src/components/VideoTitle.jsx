import React from 'react'

const VideoTitle = ({title,overview }) => {
  return (
    <div className='px-10 pt-[25%] absolute bg-gradient-to-r from-black w-full aspect-video '>
        <h1 className='text-xl md:text-5xl text-bold text-white'>{title}</h1>
        <p className='w-2/4 text-base md:text-lg pt-6 text-white hidden md:inline-block'>{overview}</p>
        <div className='md:pt-6 pt-2'>
            <button className='bg-gray-500/50 px-5 md:px-10 p-2 rounded-lg text-white text-xs md:text-lg'>Play</button>
            <button className='mx-2 bg-gray-500/50 px-5 md:px-10 p-2 rounded-lg text-white text-xs md:text-lg'>Info</button>
        </div>
    </div>
  )
}

export default VideoTitle