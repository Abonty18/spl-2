
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Leftsidebar from '../../components/sidebar/Leftsidebar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'


export default function Home() {
    return (
        <>
        <Header/>
        <div className='home'>
        <Leftsidebar/>
        <Posts/>
        <Sidebar/>
        
         </div>
        </>
    )
}


