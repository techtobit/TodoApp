import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const AddedTask = ({ tasks }) => {
 const { task, date } = tasks;

 const handelTaskFinish = () => {
  console.log('task finish');
 }

 const handelTaskEdit = () => {
  console.log("click");
 }

 return (
  <div>
   <div class="card  bg-base-100 shadow-xl">
    <div class="card-body">
     <div className="task flex items-center">
      <input type="radio" onClick={handelTaskFinish} name="radio-1" class="radio" />
      <div className="task-data px-5">
       <p class="">{task}</p>
       <div className='pl-2'>
        <p class="border-primary border-2 p-1 text-xs">{date}</p>
       </div>
      </div>
      <div className="task-edit">
       <FontAwesomeIcon icon={faPen} onClick={handelTaskEdit}></FontAwesomeIcon>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddedTask;