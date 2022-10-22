import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Tasks from '../../Hooks/Tasks';
import AddedTask from './AddedTask';
import toast from 'react-hot-toast';
// import { toast } from 'react-toastify';

const AddTasks = () => {
  const [date, setDate] = useState(new Date())

  const [tasks, setTasks] = Tasks()

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {

    if (data) {
      const url = 'https://secret-wave-39782.herokuapp.com/task';
      axios.post(url, data)
        .then(response => {
          toast.success('New Task Add')
          console.log(response)
        })
    }
    else {
      toast.error("Unsuccessful")
    }
    reset();
  };



  return (
    <div className='grid grid-cols-1'>
      <div className="add-task grid lg:grid-cols-2">
        <div className="task-date">
          <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
          />
        </div>
        <div className="task ">
          <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body">
              <h2 class="card-title">Add Task</h2>
              <div className='py-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" placeholder="New task" {...register("task", { required: true })} class="input input-ghost input-sm w-full max-w-xs" />
                  <div className=' text-left p-4'>
                    <input value={format(date, 'PP')} readOnly {...register("date")} className='border-none bg-none focus:outline-none ' />
                    {/* <p>{format(date, 'PP')}</p> */}
                  </div>
                  {/* <textarea placeholder="Description" class="textarea textarea-ghost w-full" {...register("Description")} /> */}
                  <input type="submit" value='+ Add' class=" bg-secondary text-white font-bold  input-sm w-full max-w-xs" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className='grid lg:grid-cols-3 gap-3'>
        {
          tasks.slice(0, 3).map(tasks => <AddedTask
            key={tasks._id}
            tasks={tasks}
          ></AddedTask>)
        }
      </div>
    </div>
  );
};

export default AddTasks;