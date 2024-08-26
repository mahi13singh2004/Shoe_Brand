import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-grey-800 w-full h-20  px-5'>
        <div className="left ml-4">
            <div className="logo">
            <img className='w-full h-20 p-2' src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-700x394.png" alt="" />
            </div>
        </div>
        <div className="center space-x-8 text-xl font-semibold">
            <button >Menu</button>
            <button >Location</button>
            <button >About</button>
            <button >Contact</button>
        </div>
        <div className="right mr-10">
            <button className='bg-red-500 px-4 py-1 text-white'>Login</button>
        </div>
    </nav>
  )
}

export default Navbar