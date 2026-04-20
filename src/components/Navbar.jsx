import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
   <div className="navbar bg-base-100 text-base-content shadow-md px-6">
      <div className="flex-1">
        <a className="text-2xl font-bold text-pink-400">
          BloomHaven
        </a>
      </div>
      <div className=" hidden md:flex w-full justify-center ">
        <ul className="menu menu-horizontal px-1 text-gray-700 font-medium gap-6">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
<li><Link to="/about" className="hover:text-primary">About</Link></li>
<li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
      <div className="flex-none">
        <ThemeToggle />
      </div>
      <div className="flex-none ml-4">
        <button className="btn bg-pink-300 border-none hover:bg-pink-400 text-white rounded-full px-6">
          Order Now
        </button>
       
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost">
          ☰
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

    </div>

  )
}

export default Navbar