/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ item }) => {
  const dispatch = useDispatch()
  const videoRef = useRef(null)

    const addToCollection = (item) => {
        dispatch(addCollection(item))
        dispatch(addedToast())
   
    }
    return (
        <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
            <a target='_blank' className='h-full' href={item.url}>
                {item.type == 'photo' ? (
                    <img
                        className='h-full w-full object-cover object-center'
                        src={item.src}
                        alt={item.title || ''}
                        loading='lazy'
                    />
                ) : ''}
                {item.type == 'video' ? (
                    <video
                        ref={videoRef}
                        className='h-full w-full object-cover object-center'
                        loop
                        muted
                        playsInline
                        preload='none'
                        poster={item.thumbnail}
                        src={item.src}
                        onMouseEnter={() => videoRef.current?.play()}
                        onMouseLeave={() => {
                            if (!videoRef.current) return
                            videoRef.current.pause()
                            videoRef.current.currentTime = 0
                        }}
                    ></video>
                ) : ''}
            </a>
            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
                <button
                    onClick={() => {
                        addToCollection(item)
                    }}
                    className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard