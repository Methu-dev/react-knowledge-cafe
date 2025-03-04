import React from 'react'
import profile from '../../assets/images/profile.png'
function Header() {
  return (
    <div className='flex px-4 justify-between items-center mx-4 border-b-2 py-4'>
      <h1 className='text-4xl text-blod'>Knowledge Cafe</h1>
      <img src={profile} alt={profile} />
    </div>
  )
}

export default Header
