import { Heart, Star } from 'lucide-react'
import React from 'react'

const ProductCard = ({ productId, productImage, title, price, description, rating }) => {
    return (
        <div>
            <div
                className='h-96 w-64  p-4 mx-2 my-2 hover:bg-zinc-100 rounded-md transition-all cursor-pointer'
            >
                <div className='bg-gray-100 px-6  rounded-md'>

                    <span className=' relative top-3 left-40'> <Heart className='h-6 w-6 text-red-500 hover:fill-red-500' /> </span>
                    <img
                        className='w-48 h-40 mix-blend-darken' src={productImage || ''} alt="product" />
                </div>

                <div className='flex flex-row items-center justify-between text-base py-3'>
                    <span className='font-medium'>{title || ''}...</span>
                    <span>{price}</span>
                </div>

                <div className='flex flex-col justify-center py-2'>
                    <span className='text-xs font-medium pb-1'>{description || ''}...</span>
                    <span className='text-xs font-medium flex flex-row items-center gap-1'>

                        <Star className='h-4 w-4 text-green-500 fill-green-500' />
                        <Star className='h-4 w-4 text-green-500 fill-green-500' />
                        <Star className='h-4 w-4 text-green-500 fill-green-500' />
                        <Star className='h-4 w-4 text-green-500 fill-green-500' />
                        <Star className='h-4 w-4 text-green-500 fill-green-500' />

                        <p>{rating || ''} </p>
                    </span>
                </div>
                <button
                    className='py-1 px-6 my-2 border text-sm border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-full transition-all'
                >Add to cart</button>

            </div>

        </div>
    )
}

export default ProductCard