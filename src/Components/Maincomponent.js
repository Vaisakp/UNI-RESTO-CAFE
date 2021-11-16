import React from 'react'
import FoodCategory from './FoodCategory'

const Maincomponent = () => {
    return (
        <div className='flex mt-4 justify-center   flex-col overflow-x-scroll
        ' >

           <div className=' border-b flex 
        border-gray-400'>
               <button className='text-red-500 p-4 border-b border-red-500 max-w-xl px-2 
               font-medium text-lg
               '>Salad and soups</button>

               
               


           </div>
           <div className='mt-4 p-4 border-b 
        border-gray-400'>
               <FoodCategory/>
           </div>
           <div className='mt-4 p-4 border-b 
        border-gray-400'>
               <FoodCategory/>
           </div>
            {/* <div>
               <button>briyani</button>
               <FoodCategory/>
           </div> */}
           
        </div>
    )
}

export default Maincomponent
