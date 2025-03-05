import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

function Bookmarks({bookmarks, readingTime}) {
  
  return (
    <>
    <div className='md: w-1/3 bg-amber-100 ml-4 text-center mt-4'>
     <h1 className="text-3xl">Reading Time: {readingTime}</h1>
      <h1 className='text-3xl text-center'>Bookmarks: {bookmarks.length}</h1>
      {
        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}/>)
      }
    </div>
    </>
  )
}

export default Bookmarks
