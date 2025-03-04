import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = book =>{
    console.log("yes click here");
    
  }
  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}/>
        <Bookmarks />
      </div>
    </>
  )
}

export default App
