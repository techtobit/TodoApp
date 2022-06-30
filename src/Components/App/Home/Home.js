import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {

 const AppMenu = <>
 <li>
   <Link to='dashboard'>Dashboard</Link>
   <Link to='addTask'>Add Task</Link>
   <Link to='allTask'>All Task</Link>
   <Link to='complied'>Complied Task</Link>
 </li>
 </>

 return (
  <div>
   <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    </div>
    <div class="drawer-side">
     <label for="my-drawer-2" class="drawer-overlay"></label>
     <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {AppMenu}
     </ul>

    </div>
   </div>
  </div>
 );
};

export default Home;