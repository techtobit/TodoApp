import React, { useEffect, useState } from 'react';

const Tasks = () => {
 const [tasks, setTasks] = useState([]);

 useEffect(() => {
  const url = 'http://localhost:5000/task';
  fetch(url)
   .then(res => res.json())
   .then(data => setTasks(data))
 }, [tasks])

 return [tasks, setTasks];
};

export default Tasks;