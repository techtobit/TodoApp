import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faTrash, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const Complied = ({ tasks }) => {

 const { task, Description, date, _id } = tasks

 const handleDelteForever = id => {

 }
 return (
  <div>
   <div class="card  bg-base-100 shadow-xl">
    <div class="card-body">
     <div className="task flex items-center">
      <div className="task-data px-5">
       <p class="">{task}
        <br />
        <span className='text-xs'>{Description}</span>
       </p>
       <div className='pl-2'>
        <p class="border-primary border-2 p-1 text-xs">
         <FontAwesomeIcon icon={faCalendarDays} className='pr-2'></FontAwesomeIcon>
         {date}</p>
       </div>
      </div>
      <div className="task-edit">
       <label for="editTask" onClick={() => handleDelteForever(_id)} >
        <FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon>
       </label>

      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Complied;