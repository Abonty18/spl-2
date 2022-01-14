import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <img src='https://images.pexels.com/photos/2987081/pexels-photo-2987081.jpeg'  className='singlePostImg' />
                <h1 className='singlePostTitle'>
                    Here’s a seed bank of gardening wisdom to get your ideas sprouting and blooming in the new year!
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>


                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostAuthor'>
                        Author:<b>Labiba Farah</b>
                    </span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
<p className='singlePostDesc'>
Amy Stross, the creator of Tenth Acre Farm, brings permaculture to the suburbs. Permaculture is the ever-growing idea of creating a “permanent agriculture.” In other words, it’s the attempt to develop perennial agricultural systems, or food gardens, that don’t require any plowing or replanting. Instead, they return each year like a natural forest, except one that’s abundant with human food. Stross’s blog naturally shares her knowledge on the topic, focusing on permaculture tricks you can use at home.

Stross, who is also the author of the award-winning book, The Suburban Micro-Farm, also shared some gardening tips with us:

Start small. You can always scale up as your success and enthusiasm grow.
Commit to 15 minutes a day in the garden. For some extra fun, take it with your morning coffee or your favorite after-work happy hour drink.
Plant what you love to eat rather than what you think you should eat.
This blog from Ohio is a good starting place for thought-provoking and view-shifting takes on gardening from a permaculture angle!      
</p>

            </div>
        </div>
    )
}

