import React from 'react'

const FoodCategory = () => {
    return (
        <div className='flex items-center justify-between'>

            <div className=' flex flex-col'>
                    <div className='border border-green-500 p-1'>
                        <div className='bg-green-500 w-4 h-4 rounded-full '>
                        </div>
                    </div>
                
                <div className='flex' >
          
                    <h1 className='font-semibold '>Spanish Salad</h1>
                </div>
                <p className='font-medium my-2 '>25rs</p>
                <p className='text-gray-400'>dfsavfsbaststesthh</p>
                <div className='bg-green-500 py-1 mt-4 rounded-3xl flex items-center justify-center text-white'>
                    <button className='font-bold px-4'>-</button>
                    <p className=' px-4'>0</p>
                    <button className='font-bold px-4'>+</button>

                </div>
            </div>   
            <div className='flex items-center'>
                <p className='font-semibold mr-8 '>15 calories</p>
                <img className =' w-28 h-28 object-cover rounded-md' src="https://i.imgur.com/PoJfqsD.jpg" alt="imagesd" />
            </div>
        </div>
    )
}

export default FoodCategory
