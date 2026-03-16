import axios from 'axios'
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXEL_KEY = import.meta.env.VITE_PEXELS_KEY

// Simple in-memory caching to avoid repeated network calls for the same query/page
const photoCache = new Map()
const videoCache = new Map()

export async function fetchPhotos(query, page = 1, per_page = 15) {
    const cacheKey = `${query}|${page}|${per_page}`
    if (photoCache.has(cacheKey)) {
        return photoCache.get(cacheKey)
    }

    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
    })

    photoCache.set(cacheKey, res.data)
    return res.data
}

export async function fetchVideos(query, page = 1, per_page = 15) {
    const cacheKey = `${query}|${page}|${per_page}`
    if (videoCache.has(cacheKey)) {
        return videoCache.get(cacheKey)
    }

    const res = await axios.get(`https://api.pexels.com/v1/videos/search`, {
        params: { query, page, per_page },
        headers: { Authorization: PEXEL_KEY }
    })

    videoCache.set(cacheKey, res.data)
    return res.data
}