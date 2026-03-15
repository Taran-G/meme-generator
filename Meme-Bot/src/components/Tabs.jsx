import { useDispatch,useSelector} from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

export const Tabs = () => {
    const tabs = ['photos','videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-5 p-10'>
        {tabs.map(function(elem,idx){
            return <button key ={idx} 
       className={`${(activeTab==elem?'bg-blue-700':'bg-gray-500')} transition cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
           onClick={()=> dispatch(setActiveTab(elem))}
            >
                {elem}</button> 

        }
        )}
    </div>
  )
}
