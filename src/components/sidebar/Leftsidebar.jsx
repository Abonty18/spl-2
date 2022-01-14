import './leftsidebar.css'

export default function Leftsidebar() {
    return (
        <div className='leftsidebar'>
                <span className='leftsidebarTitle'>CATEGORIES</span>
                <ul className='leftsidebarList'>
                <li className='item'>Painting</li>
                    <li className='item'>Singing</li>
                    <li className="item">Gardening</li>
                    
                    <li className='item'>Dancing</li>
                    <li className='item'>Cooking</li>
                    <li className='item'>Others</li>

                </ul>
            </div>
    )
}


