import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../../Assets/Logo/TodoApp.png'
import './NavBar.css'

const NavBar = () => {
 const AppMenu = <>
  <li>
   {/* <Link to=''>Dashboard</Link> */}
   <Link to=''>Task</Link>
   <Link to='calendar'>Calendar</Link>
   <Link to='allTasks'>List</Link>
   <Link to='complied'>Finish</Link>
  </li>
 </>
 return (
  <div className="navbar lg:px-10">
   <div className="navbar-start">
    <div className="dropdown">
     <label tabindex="0" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </label>

     <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {AppMenu}
     </ul>
    </div>
    <div className="app-logo flex items-center">
     <img className='AppLogo' src={AppLogo} alt="" />
     <h2 className='lg:text-xl sm:text-lg  font-bold'>Task Bord</h2>
    </div>
   </div>
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     <input type="text" placeholder="Search" class="input input-bordered w-full max-w-xs" />
    </ul>
   </div>
   <div className="navbar-end">
    <div class="avatar">
     <div className=" AppLogo rounded-full">
      <img className='AppLogo' src="https://placeimg.com/192/192/people" />
     </div>
    </div>
   </div>
  </div>
 );
};

export default NavBar;