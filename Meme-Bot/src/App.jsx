import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'



function App() {
  return (
    <div className='h-screen w-full text-white bg-gray-950'>
          <button className = "bg-green-400 px-4 py-2 m-5"onClick ={async ()=>{
            const data = await fetchPhotos('dog')
            console.log(data.results)
          }}
          >get-Photos</button>

          <button className = "bg-green-400 px-4 py-2 m-5"onClick ={async ()=>{
            const data = await fetchVideos('dog')
            console.log(data.videos)
          }}
          >get-Videos</button>

    </div>
  )
}

export default App