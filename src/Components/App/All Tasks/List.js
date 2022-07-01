import React from 'react';
import Tasks from '../../Hooks/Tasks';
import AllTasks from './AllTasks';

const List = () => {
 const [tasks, setTasks] = Tasks()
 return (
  <div className='grid lg:grid-cols-3 gap-3'>
   {
    tasks.map(tasks => <AllTasks
     key={tasks._id}
     tasks={tasks}
    ></AllTasks>)
   }
  </div>
 );
};

export default List;