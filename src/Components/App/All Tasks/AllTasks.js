import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Modal from '../../Shared/Modal/Modal';
import toast from 'react-hot-toast';

const AllTasks = ({ tasks }) => {
  const { task, date, _id, Description } = tasks;
  const [editTask, setEditTask] = useState([])

  const handelTaskFinish = (_id, task, date, Description) => {
    if (_id) {

      //save finish task to complied task database
      const tasks = {
        taskId: _id,
        task: task,
        date: date,
        Description: Description
      }
      const url = 'https://todo-app-backend-orpin-six.vercel.app/taskFinish';
      axios.post(url, tasks)
        .then(response => {
          toast.success('Task Completed')
          console.log(response)

          //delete finish task from task list
          const url = `https://todo-app-backend-orpin-six.vercel.app/task/${_id}`
          axios.delete(url, _id)
            .then(response => {
              console.log(response)
            })

        })
    }

  }
  return (
    <div>
      <div class="card  bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="task flex items-center">
            <input type="radio" onClick={() => handelTaskFinish(_id, task, date, Description)} name="radio-1" class="radio" />
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
              <label for="editTask" onClick={() => setEditTask(_id)} >
                <FontAwesomeIcon icon={faPen} ></FontAwesomeIcon>
              </label>

            </div>
          </div>
        </div>
      </div>
      {
        editTask && <Modal taskId={editTask}></Modal>
      }
    </div>
  );
};

export default AllTasks;