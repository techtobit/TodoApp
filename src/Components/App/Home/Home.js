import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {

  const AppMenu = <>
    <li>
      {/* <Link to=''>Dashboard</Link> */}
      <Link to='addTasks'>Task</Link>
      <Link to='calendar'>Calendar</Link>
      <Link to='allTasks'>List</Link>
      <Link to='complied'>Finish</Link>
    </li>
  </>

  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center lg:py-12 md:py-12 py-5">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side bg-primary">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-base-content">
            {AppMenu}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Home;