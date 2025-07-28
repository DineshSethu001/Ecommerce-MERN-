import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event)=>{
        event.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className="text-2xl font-medium text-gray-800">
           Subscribe now to unlock exclusive savings.

        </p>
      
        <p className="text-gray-400 mt-3">
             Get 20% off on your first purchase!
        </p>
        <form onSubmit={onSubmitHandler}  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded'>
            <input className="w-full sm:flex-1 outline-none" type='email' placeholder='Enter you email id' required/>
            <button type="submit" className='bg-black text-white text-xs px-10 py-4 rounded '>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox