import './write.css'

export default function Write() {
    return (
        <div className='write'>
        <img  className='writeImg' src="http://shop.wilsoncountyhyundai.com/wp-content/uploads/sites/77/2019/11/art-painting-hobby-e1577112858893.jpg"/>
           <form className='writeForm'>
             <div className='writeFormGroup' >
                 <label htmlFor='fileInput'>
                 <i className="writeIcon fas fa-plus"></i>
                 </label>
                 <input type='file' id="fileInput"  style={{display:'none'}}/>
                 <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>

             </div> 
             <div className='writeFormGroup'>
                 <textarea placeholder='Tell something about your hobby...' type="text" className='writeInput writeText'></textarea>
             </div>
             <button className='writeSubmit'>Publish</button>

           </form> 
        </div>
    )
}


