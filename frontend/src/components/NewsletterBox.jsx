import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler=(event)=>{
       event.preventDefault();
    }
    return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
     <p className='text-gray-400 mt-3'>
        From sophisticated everyday essentials to standout pieces for special occasions, our designs combine premium fabrics, meticulous craftsmanship, and a love for detail.
We believe in making style accessible without compromising on quality, so you can feel your best—inside and out.

Whether you’re exploring our latest arrivals or rediscovering classic favorites, Peonies Studio is here to make your wardrobe as vibrant and unique as you are.


     </p>
     <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex outline-none' type='email' placeholder="Enter your email" required />
     <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
     </form>
    </div>
  )
}

export default NewsletterBox
