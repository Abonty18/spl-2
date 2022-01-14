import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US<br /></span>
                <img src="https://www.nicepng.com/png/full/877-8772833_cartoon-network-clipart-we-bare-bears-we-bare.png" height={100} width={150} alt=''/>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
            </div>
           {/* <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li classname="sidebarListItem">Gardening</li>
                    <li classname='sidebarListItem'>Painting</li>
                    <li classname='sidebarListItem'>Singing</li>
                    <li classname='sidebarListItem'>Dancing</li>
                    <li classname='sidebarListItem'>Cooking</li>
                    <li classname='sidebarListItem'>Others</li>

                </ul>
            </div> */}
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>

            </div>
        </div>
    )
}


