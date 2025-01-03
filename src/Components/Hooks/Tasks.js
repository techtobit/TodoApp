import React, { useEffect, useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const url = 'https://todo-app-backend-orpin-six.vercel.app/task';
    fetch(url)
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [tasks])
  console.log(tasks)

  return [tasks, setTasks];
};

export default Tasks;