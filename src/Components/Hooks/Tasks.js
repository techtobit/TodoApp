import React, { useEffect, useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const url = 'https://secret-wave-39782.herokuapp.com/task';
    fetch(url)
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [tasks])

  return [tasks, setTasks];
};

export default Tasks;