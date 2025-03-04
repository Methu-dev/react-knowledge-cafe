import React from 'react'
import profile from '../../assets/images/profile.png'
function Header() {
  return (
    <div className='flex px-4 justify-between items-center border-b-2 py-4 max-w-7xl mx-auto'>
      <h1 className='text-4xl text-blod'>Knowledge Cafe</h1>
      <img src={profile} alt={profile} />
    </div>
  )
}

export default Header
