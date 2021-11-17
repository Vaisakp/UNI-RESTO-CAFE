import React,{useState} from 'react'

const FoodCategory = ({itemData,changeitemsincart}) => {
    const [itemQty, setitemQty] = useState(0)
//     addonCat: (2) [{…}, {…}]
// dish_Availability: true
// dish_Type: 2
// dish_calories: 15
// dish_currency: "SAR"
// dish_description: "Fresh spinach, mushrooms, and hard-boiled egg served with warm bacon vinaigrette"
// dish_id: "100000001"
// dish_image: "https://i.imgur.com/PoJfqsD.jpg"
// dish_name: "Spinach Salad"
// dish_price: 7.95
// nexturl: "http://snapittapp.snapitt.net/api/menu/30/?org=1010000001&branch_id=1000000001&menuItem=100000001&limit=10&offset=20&lang=en"
// [[Prototype]]: Object
const changeQty = (type)=>{
    if(type === 'increment')
    {
        setitemQty((prev)=>prev+1)
        changeitemsincart('increment')
    }
    else if( itemQty === 0)
    {       
    }
    else{
        setitemQty((prev)=>prev-1)
        changeitemsincart('decrement')
    }
}
    return (
        <div className='flex items-center justify-between'>
            <div className=' flex  '>
                    <div className='border border-green-500 mr-4 p-1 h-6 w-6 flex items-center justify-center  '>
                        <div className='bg-green-500 w-4 h-4 rounded-full '>
                        </div>
                    </div>               
                <div>
                    <div className='flex' >         
                    <h1 className='font-semibold '>{itemData.dish_name}</h1>
                </div>
                <p className='font-medium my-2 '>{itemData.dish_currency} {itemData.dish_price}</p>
                <p className='text-gray-400'>{itemData.dish_description}</p>
                <div className='bg-green-500 py-1 w-32 mt-4 rounded-3xl flex items-center justify-center text-white'>
                    <button className='font-bold px-4' onClick={()=>{changeQty('decrement')}} >-</button>
                    <p className=' px-4'>{itemQty}</p>
                    <button className='font-bold px-4' onClick={()=>{changeQty('increment')}}>+</button>
                </div>
                </div>
            </div>   
            <div className='flex items-center'>
                <p className='font-semibold mr-8 '>{itemData.dish_calories} calories</p>
                <img className =' w-28 h-28 object-cover rounded-md' src={itemData.dish_image} alt="imagesd" />
            </div>
        </div>
    )
}

export default FoodCategory
