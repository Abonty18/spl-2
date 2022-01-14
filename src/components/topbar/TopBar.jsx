import "./topbar.css"



export default function TopBar() {
  return(
    <div className="top">
         <div className="topLeft">
         <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-instagram"></i>
        
         </div>
         <div className="topCenter">
             <ul className="topList">
             <li className="topListItem">HOME</li>
             <li className="topListItem">EXPLORE</li>
             <li className="topListItem">WRITE</li>
             <li className="topListItem">CONTACT</li>
             
             <li className="topListItem">LOGOUT</li>

             </ul>
         </div>
         <div className="topRight">
         <img className="topImg"  src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />    
             <i className="topSearchIcon fas fa-search"></i>     
        </div>
    </div>
   )

 }
