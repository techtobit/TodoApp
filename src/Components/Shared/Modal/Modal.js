import React from 'react';

const Modal = ({ taskId }) => {
  return (
    <div>
      <input type="checkbox" id="editTask" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        
          <h3 class="font-bold text-lg">Hello,BOOM BOOM</h3>
          <p class="py-4">{taskId}</p>
          <div class="modal-action">
            <label for="editTask" class="btn">Update</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;