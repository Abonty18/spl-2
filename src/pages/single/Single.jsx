import Leftsidebar from '../../components/sidebar/Leftsidebar'
import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlePost/SinglePost'
import './single.css'

export default function Single() {
    return (
        <div className='single'>
            {/* post*/}
            <Leftsidebar/>
            <Singlepost/> 
            
            
           
        </div>
    )
}


