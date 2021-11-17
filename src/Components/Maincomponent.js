import React, { useEffect, useState } from 'react'
import FoodCategory from './FoodCategory'
import { data } from '../data'

const Maincomponent = () => {
    const [categories, setcategories] = useState([])
    const [Items, setItems] = useState([])
    console.log(Items)
    const getData=()=>{
       setcategories(data[0].table_menu_list)
    }
    const changeItems =(category)=>{
   
        const filteredData = categories.filter((item=>item.menu_category === category))
        setItems(filteredData[0].category_dishes)
        
    }
    useEffect(() => {
      getData();
        
    }, [])

    return (
        <div className='flex mt-4 justify-center   flex-col overflow-x-scroll' >
           <div className=' border-b flex 
        border-gray-400'>
            { 
               categories && categories.map((item)=>{return(
                <button key={item.menu_category} className='text-red-500 p-4 border-b border-red-500 max-w-xl px-2 
               font-medium text-lg
               ' onClick={()=>{changeItems(item.menu_category)}} >{item.menu_category}</button>
               )})
            }  
           </div>
           { Items && Items.map((item)=>{
               return(
                    <div className='mt-4 p-4 border-b 
                         border-gray-400' key={item.dish_id}>
                         <FoodCategory itemData ={item}/>
                    </div>
               )
           })

           
           }
           {/* <div className='mt-4 p-4 border-b 
        border-gray-400'>
               <FoodCategory/>
           </div> */}
            {/* <div>
               <button>briyani</button>
               <FoodCategory/>
           </div> */}
           
        </div>
    )
}

export default Maincomponent
