import React, { useEffect, useState } from 'react';
import Completed from './Completed';

const FinishList = () => {
  const [finishTask, setFinishTask] = useState([])

  useEffect(() => {
    fetch('https://todo-app-backend-orpin-six.vercel.app/taskFinish')
      .then(res => res.json())
      .then(data => setFinishTask(data))
  }, [finishTask])
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
      {
        finishTask.map(tasks => <Completed
          key={tasks._id}
          tasks={tasks}
        ></Completed>)
      }
    </div>
  );
};

export default FinishList;