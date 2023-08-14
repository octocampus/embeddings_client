import React from 'react';

export default function ModalComponent({
  modalRef,
  handleClickOutside,
  handleFormSubmit,
  handleCancel,
  formData,
  setFormData,
  error,
}) {
  return (
    <div
    className='fixed top-0 left-0 right-0 bottom-0 w-screen h-screen'
    onClick={handleClickOutside}
  >
    <div
      ref={modalRef}
      className='absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-5 bg-gray-200 px-7 py-7 rounded-md w-96 '
    >
      <form onSubmit={handleFormSubmit}>
<div class="mb-6">
  <label for="base-input" class="block mb-2 text- font-bold  text-gray-900 ">Name</label>
  <input type="text" id="base-input" placeholder="Enter name" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "/>
  </div>  
  <div class="mb-6">
   <label for="large-input" class="block mb-2 text-sm  font-bold  text-gray-900 text-center align-top">description</label>
   
<input type="text" id="large-input" placeholder="description..." rows="4" value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="block w-full h-24 p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500  placeholder-top placeholder-left focus:border-blue-500     "/>      
</div>
<div className="flex space-x-8 justify-center">
<button
type="submit"
onClick={handleFormSubmit}
className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
>
Confirm
</button>
<button
type="button"
onClick={handleCancel}
className="px-4 py-2 text-sm text-gray-900 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-300"
>
Cancel
</button>
</div>
{error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
 
    </div>
  </div>
  );
}
