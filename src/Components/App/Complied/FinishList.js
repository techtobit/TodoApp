import React, { useEffect, useState } from 'react';
import Complied from './Complied';

const FinishList = () => {
  const [finishTask, setFinishTask] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/taskFinish')
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