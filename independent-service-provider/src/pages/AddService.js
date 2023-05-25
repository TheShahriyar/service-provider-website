import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);

    const url = `http://localhost:4000/service`

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }

  return (
    <div className='xl:w-1/4 mx-auto py-10 min-h-screen px-4'>
      <h2 className='mb-8 text-3xl'>Please add service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('name', { required: true })}
            type='text'
            placeholder='Service Name'
            className="w-full mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
          />
          {errors.name && <p>Service name is required.</p>}
        </div>
        <div>
          <textarea {...register('desc', { required: true })}
            row="5"
            placeholder='Service Details'
            className="w-full mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
          />
          {errors.desc && <p>Service Details is required.</p>}
        </div>
        <div>
          <input {...register('price', { required: true })}
            type='number'
            placeholder='Service Price'
            className="w-full mb-8 bg-transparent border border-gray-400 px-6 py-3 focus:border-sky-400 focus:outline-0"
          />
          {errors.price && <p>Please enter number for Price.</p>}
        </div>
        <div>
          <button type="submit" className="w-full bg-sky-400 hover:bg-sky-500 transition-colors px-8 py-3 text-white rounded">
            Add Service
          </button>
        </div>
    </form>
    </div>
  );
};

export default AddService;