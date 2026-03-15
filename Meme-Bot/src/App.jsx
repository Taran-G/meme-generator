import { useDispatch,useSelector} from 'react-redux'
import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import { Tabs } from './components/Tabs'




const App = () => {
  const query = useSelector((state)=>state.search.query)

  return (
    
    <div className='h-screen w-full text-white bg-gray-950'>
          <SearchBar />
          <Tabs />
          

    </div>
  )
}

export default App