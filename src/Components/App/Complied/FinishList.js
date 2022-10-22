import React, { useEffect, useState } from 'react';
import Complied from './Complied';

const FinishList = () => {
  const [finishTask, setFinishTask] = useState([])

  useEffect(() => {
    fetch('https://secret-wave-39782.herokuapp.com/taskFinish')
      .then(res => res.json())
      .then(data => setFinishTask(data))
  }, [finishTask])
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
      {
        finishTask.map(tasks => <Complied
          key={tasks._id}
          tasks={tasks}
        ></Complied>)
      }
    </div>
  );
};

export default FinishList;