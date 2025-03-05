import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = book =>{
    const newBokmarks = [...bookmarks, book]
    setBookmarks(newBokmarks)  
  }

  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
      setReadingTime(newReadingTime);
      
    }
  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}/>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
      </div>
    </>
  )
}

export default App
