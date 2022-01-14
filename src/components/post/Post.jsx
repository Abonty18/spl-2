import './post.css'

export default function Post() {
    return (
        <div className="Post">
           <img className='postImg' src="https://images.pexels.com/photos/2987081/pexels-photo-2987081.jpeg"  alt="" /> 
        <div className='postInfo'>
            <div className='postCats'>
               <span className='postCat' >Gardening</span>
           {/* <span className='postCat'>Painting</span> */}
           
            </div>
            <span className='postTitle'>Here’s a seed bank of gardening wisdom to get your ideas sprouting and blooming in the new year! </span>
       <hr/>
       <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
        As we open our eyes to the dawn of a new year, everything in the world seems fresh and new. It’s time to nurture new ideas and new wishes. When we look out into the world of gardening bloggers, we discover many people just like us, who love nothing more than to sink their hands into the earth and watch a seedling sprout. They love it so much that they’ve made a career out of it! Just as they’ve grown beautiful gardens, they’ve used their creative talents to grow beautiful blogs, too.A Way to Garden creator Margaret Roach is a heavy-hitter in the garden blogging world. Her accomplishments include several books, such as and i shall have some peace there (2011), which she wrote after leaving her life as a writer in New York City to start a small farm upstate. Her articles are conveniently organized into groupings based on topic—ranging from groundcovers to perennials to vines and vegetables—which makes it easy to browse her archive. She also shares information in podcasts that you can enjoy while you’re working away in the garden! 
        </p>
        </div>
    )
}


