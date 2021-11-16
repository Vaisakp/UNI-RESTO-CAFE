import React from 'react'
import { ShoppingCart } from 'react-feather';

const Navbar = () => {
    return (
        <div className='flex  justify-between p-4' >
            <div>
                <h1 className='text-gray-500 text-xl font-medium' >UNI Resto Cafe</h1>
            </div>
            <div className='flex '>
                <p className='mr-4 text-gray-500'>My Orders</p>
                <div className='text-gray-500'>
                    <ShoppingCart/>
                </div>
            </div>

        </div>
    )
}

export default Navbar
