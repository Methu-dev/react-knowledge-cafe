import React from 'react'

function Bookmark({bookmark}) {
    const {title} = bookmark
  return (
    <div className='bg-slate-300 p-4 m-4 rounded-2xl'>
      <h1 className='text-2xl'>{title}</h1>
    </div>
  )
}

export default Bookmark
