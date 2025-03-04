import React from 'react'
import { LuBookmark } from 'react-icons/lu';

function Blog({blog, handleAddToBookmark}) {
    const {cover, title, author_img, reading_time, author, posted_date, hashtags} = blog;
  return (
    <>
    <div className='mb-20'>
        <div>
        <img className='w-[845px] h-[450px] mb-8 rounded-2xl' src={cover} alt={`cover picture of the title ${title}`} />
    </div>
    
    <div className='flex justify-between mb-6'>
        
        <div className='flex items-center'>  {/* Ensure items are aligned closely */}
            {/* Author Image */}
            <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt={`author of the title ${title}`} />
            
            {/* Author Name and Date next to Image */}
            <div className='ml-2 flex flex-col '>
                <h3 className="text-2xl ml-6">{author}</h3>
                <p className='ml-6'>{posted_date}</p>
            </div>
        </div>
        
        <div className='flex items-center'>
    <span>{reading_time} min read</span>
    <button onClick={handleAddToBookmark} className='ml-2 text-2xl'><LuBookmark /></button>
</div>

    </div>
    
    <div>
        <h1 className='text-4xl'>{title}</h1>
        <p >
            {
                hashtags.map((has, idx) => <span key={idx}><a href="">{has}</a></span>)
            }
        </p>
    </div>
    </div>
    </>
  )
}


export default Blog
