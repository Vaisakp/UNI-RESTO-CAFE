import React from 'react'

const FoodCategory = ({itemData}) => {
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
    return (
        <div className='flex items-center justify-between'>
            <div className=' flex flex-col'>
                    <div className='border border-green-500 p-1'>
                        <div className='bg-green-500 w-4 h-4 rounded-full '>
                        </div>
                    </div>               
                <div className='flex' >         
                    <h1 className='font-semibold '>{itemData.dish_name}</h1>
                </div>
                <p className='font-medium my-2 '>{itemData.dish_currency} {itemData.dish_price}</p>
                <p className='text-gray-400'>{itemData.dish_description}</p>
                <div className='bg-green-500 py-1 mt-4 rounded-3xl flex items-center justify-center text-white'>
                    <button className='font-bold px-4'>-</button>
                    <p className=' px-4'>0</p>
                    <button className='font-bold px-4'>+</button>
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
