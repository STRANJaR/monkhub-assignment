import React from 'react'
import CategoriCard from './CategoriCard'

const ProductCheckout = () => {
    return (
        <section className='h-screen w-full'>
            <div className='h-auto w-full flex flex-row items-center justify-between p-10'>
                <div className='w-1/2 h-screen'>
                    <div className='h-full w-full flex flex-col gap-4 p-3'>
                        <div className='h-1/2 w-full border rounded-md p-5'>
                            <h1 className='font-semibold'>Checkout</h1>
                            <div className='py-2'>
                                <div className='h-48 w-[550px] rounded-md px-2  border flex  justify-between py-5'>
                                    <div className='flex flex-row gap-3 '>
                                        <div>
                                            <img
                                                className='h-28 w-28 rounded-md mix-blend-darken'
                                                src={''} alt="category img" />
                                        </div>

                                        <div className='flex flex-col '>
                                            <span className='text-lg font-semibold'>product name</span>
                                            <span className='text-sm py-3'>product desc</span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <span className='text-lg font-semibold'>Price</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-1/2 w-full border rounded-md'>
                            one
                        </div>

                    </div>
                </div>

                <div className='w-1/2 h-screen p-3'>
                    <div className='h-full w-full border rounded-md'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCheckout