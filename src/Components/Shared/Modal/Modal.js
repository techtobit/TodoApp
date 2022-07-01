import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const Modal = ({ taskId }) => {
  const [upDateTask, setUpDateTask] = useState([]);
  // update date
  const [newDate, setNewDate] = useState(upDateTask.date);


  useEffect(() => {
    const url = `https://sleepy-dawn-13641.herokuapp.com/task/${taskId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUpDateTask(data))
  }, [taskId, upDateTask])

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);

    if (data) {
      const url = `https://sleepy-dawn-13641.herokuapp.com/task/${taskId}`;
      axios.put(url, data)
        .then(response => console.log(response))
    }
    reset();
  };

  //delete task from task list
  const handleDeleteTask = Id => {
    if (Id) {

      const url = `https://sleepy-dawn-13641.herokuapp.com/task/${Id}`
      axios.delete(url, Id)
        .then(response => console.log(response))

    }
  }




  return (
    <div>
      <input type="checkbox" id="editTask" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box ">
          <div className="modal-control flex justify-between items-center">
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteTask(taskId)} className='pr-2 w-5 h-5 hover:text-red-600'></FontAwesomeIcon>
            <label for="editTask" class="btn btn-sm btn-circle">✕</label>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='py-5'>
            <input text='text' value={upDateTask.task} placeholder={upDateTask.task} {...register("task", { required: true })} class="input bg-slate-200 input-sm w-full" />
            <div className=' text-left p-4'>
              {/* <input value={format(newDate, 'PP')} readOnly {...register("date")} className='border-none bg-none focus:outline-none ' /> */}
              <p onClick={() => setNewDate(upDateTask.date)} className=' border-2 border-primary'>
                <FontAwesomeIcon icon={faCalendarPlus} className='pr-2 w-5 h-5 '></FontAwesomeIcon>
                {upDateTask.date}

              </p>
              {
                newDate && <DayPicker
                  mode='single'
                  selected={newDate}
                  onSelect={setNewDate}
                />
              }
            </div>
            <textarea value={upDateTask?.Description} placeholder="Description" class="textarea textarea-ghost w-full bg-slate-200" {...register("Description")} />
            <input type="submit" value='Update' for="editTask" class="btn  bg-secondary text-white font-bold  btn-sm w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;